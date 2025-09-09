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
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome — Example</title>
</head>
<body class="bg-gradient-to-br from-slate-100 via-white to-slate-50 text-slate-800">
  <center class="py-10">
    <table role="presentation" class="email-container w-full" cellpadding="0" cellspacing="0">
      <tr>
        <td class="bg-white rounded-3xl shadow-xl overflow-hidden">

          <!-- Header Banner -->
          <div class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-8 text-center">
            <h1 class="text-3xl font-bold tracking-tight">🎉 Welcome Aboard, {name}!</h1>
            <p class="text-sm opacity-90 mt-1">Your journey with us starts today</p>
          </div>

          <!-- Body -->
          <div class="p-8">
            <p class="text-slate-600 leading-relaxed mb-6 text-base">
              We're thrilled to have you join us. Here’s how to make the most out of your new account:
            </p>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border shadow-sm hover:shadow-md transition">
                <div class="text-2xl mb-2">👤</div>
                <h3 class="text-sm font-semibold mb-1">Profile</h3>
                <p class="text-xs text-slate-500">Set up your profile and make it truly yours.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border shadow-sm hover:shadow-md transition">
                <div class="text-2xl mb-2">🚀</div>
                <h3 class="text-sm font-semibold mb-1">Explore</h3>
                <p class="text-xs text-slate-500">Dive into the dashboard and discover new tools.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border shadow-sm hover:shadow-md transition">
                <div class="text-2xl mb-2">💬</div>
                <h3 class="text-sm font-semibold mb-1">Support</h3>
                <p class="text-xs text-slate-500">Need help? Our team is here for you anytime.</p>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center mb-8">
              <a href="{{gettingStartedUrl}}"
                 class="inline-block px-8 py-3 rounded-2xl font-semibold text-white shadow-lg no-underline
                        bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:opacity-90 transition">
                Get Started
              </a>
            </div>

            <!-- Footer -->
            <div class="text-xs text-slate-500 leading-relaxed">
              <p class="mb-2">Need anything? Just reply to this email or visit our 
                <a href="{{supportUrl}}" class="text-sky-600 underline">Help Center</a>.
              </p>
              <p class="mb-0">© Example, Inc. All rights reserved.</p>
            </div>
          </div>
        </td>
      </tr>

      <!-- Unsubscribe -->
      <tr>
        <td class="pt-6 text-xs text-slate-400 text-center">
          <p class="mb-0">You’re receiving this email because you signed up for Example. 
            If you’d rather not receive these, <a href="{{unsubscribeUrl}}" class="underline">unsubscribe</a>.
          </p>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>
`