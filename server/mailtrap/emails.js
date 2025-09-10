import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationToken}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email send successfully", response);
  } catch (error) {
    console.log(`Error sending verification email`, error.message);
    throw new Error(`Error sending verification email: , ${error}`);
  }
};

export const sendWelcomeEmail = async (email, user) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome Email",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", user),
      category: "Welcome Email",
    });

    console.log("Welcome Email send successfully", response);
  } catch (error) {
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
      category: "Password Reset",
    });
  } catch (error) {
    console.log(`Error sending reset password email`, error.message);
    throw new Error(`Error sending reset password email: , ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Success",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password reset email send successfully", response);
  } catch (error) {
    console.log("Error sending password reset success email", error.message);
    throw new Error(`Error sending password reser success email: ${error}`);
  }
};
