const otpGenerator = require('otp-generator');

// Function to generate OTP
const generateOTP = () => {
  // Generate a 6-digit numeric OTP
  const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });

  return otp;
};

module.exports = {
  generateOTP,
};
