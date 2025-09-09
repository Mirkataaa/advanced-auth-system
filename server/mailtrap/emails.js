import {
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
      category: "Welcome Email"
    });

    console.log("Welcome Email send successfully", response);
  } catch (error) {
    throw new Error(`Error sending welcome email: ${error}`)
  }
};
