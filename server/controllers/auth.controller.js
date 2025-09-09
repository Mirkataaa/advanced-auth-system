import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required!");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);
    res.status(201).json({
      success: true,
      message: "User createded successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { verificationToken } = req.body;

  try {
    const user = await User.findOne({
      verificationToken,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    user.isVerified = true;

    // delete token and date
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);

    console.log({ ...user._doc, password: undefined });

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    console.log("Error in verifyEmail", error.message);

    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
