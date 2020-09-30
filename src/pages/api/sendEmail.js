export default (req, res) => {
  const isinya = req.body;
  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  console.log("google: ", google);
  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.NEXT_PUBLIC_CLIENT_ID, // ClientID
    process.env.NEXT_PUBLIC_CLIENT_SECRET, // Client Secret
    process.env.NEXT_PUBLIC_REDIRECT_URL // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN
  });
  const accessToken = oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.NEXT_PUBLIC_EMAILKU, 
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
        accessToken: accessToken
    }
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAILKU,
    to: isinya.email,
    subject: "ACES credential",
    generateTextFromHTML: true,
    html: `username : ${isinya.username} dan passwordnya : ${isinya.password} Terima kasih`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });

}
