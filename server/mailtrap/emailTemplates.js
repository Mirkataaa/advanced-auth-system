export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationToken}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome — Example</title>
</head>
<body style="font-family: Arial, sans-serif; background: linear-gradient(to bottom right, #f1f5f9, #ffffff, #f8fafc); color: #1e293b; margin:0; padding: 40px 0;">
  <center>
    <table role="presentation" style="width:100%; max-width:680px; margin:0 auto;" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background-color:#ffffff; border-radius:20px; box-shadow:0 4px 20px rgba(0,0,0,0.08); overflow:hidden;">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(to right, #06b6d4, #2563eb); color:white; padding:40px 20px; text-align:center;">
            <h1 style="margin:0; font-size:28px; font-weight:bold;">🎉 Welcome Aboard, {name}!</h1>
            <p style="margin:8px 0 0; font-size:14px; opacity:0.9;">Your journey with us starts today</p>
          </div>

          <!-- Body -->
          <div style="padding:32px 24px;">
            <p style="font-size:15px; color:#475569; line-height:1.6; margin:0 0 24px;">
              We're thrilled to have you join us. Here’s how to make the most out of your new account:
            </p>

            <!-- Features -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:16px; border:1px solid #e5e7eb; border-radius:12px; text-align:center;">
                  <div style="font-size:24px; margin-bottom:8px;">👤</div>
                  <h3 style="margin:0; font-size:14px; font-weight:600;">Profile</h3>
                  <p style="margin:4px 0 0; font-size:12px; color:#64748b;">Set up your profile and make it truly yours.</p>
                </td>
                <td style="width:16px;"></td>
                <td style="padding:16px; border:1px solid #e5e7eb; border-radius:12px; text-align:center;">
                  <div style="font-size:24px; margin-bottom:8px;">🚀</div>
                  <h3 style="margin:0; font-size:14px; font-weight:600;">Explore</h3>
                  <p style="margin:4px 0 0; font-size:12px; color:#64748b;">Dive into the dashboard and discover new tools.</p>
                </td>
                <td style="width:16px;"></td>
                <td style="padding:16px; border:1px solid #e5e7eb; border-radius:12px; text-align:center;">
                  <div style="font-size:24px; margin-bottom:8px;">💬</div>
                  <h3 style="margin:0; font-size:14px; font-weight:600;">Support</h3>
                  <p style="margin:4px 0 0; font-size:12px; color:#64748b;">Need help? Our team is here for you anytime.</p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <div style="text-align:center; margin-bottom:32px;">
              <a href="{{gettingStartedUrl}}" 
                 style="display:inline-block; padding:14px 28px; border-radius:14px; background: linear-gradient(to right, #06b6d4, #0ea5e9, #2563eb); color:#ffffff; font-size:15px; font-weight:bold; text-decoration:none; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                Get Started
              </a>
            </div>

            <!-- Footer -->
            <div style="font-size:12px; color:#64748b; line-height:1.5;">
              <p style="margin:0 0 8px;">Need anything? Just reply to this email or visit our 
                <a href="{{supportUrl}}" style="color:#0ea5e9; text-decoration:underline;">Help Center</a>.
              </p>
              <p style="margin:0;">© Example, Inc. All rights reserved.</p>
            </div>
          </div>
        </td>
      </tr>

      <!-- Unsubscribe -->
      <tr>
        <td style="padding-top:24px; text-align:center; font-size:11px; color:#94a3b8;">
          <p style="margin:0;">You’re receiving this email because you signed up for Example. 
            If you’d rather not receive these, <a href="{{unsubscribeUrl}}" style="text-decoration:underline; color:#64748b;">unsubscribe</a>.
          </p>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>
`;
