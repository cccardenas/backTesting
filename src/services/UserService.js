const User = require("../models/User");

async function login(email, password) {
  try {
    console.log(email);
    const user = await User.findOne({ email, password });
    if (user) {
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  } catch (error) {
    return { success: false, message: "An error occurred while logging in" };
  }
}

async function register(fullName, username, email, password) {
  try {
    const newUser = new User({ fullName, username, email, password });
    await newUser.save();
    return { success: true, message: "Registration successful" };
  } catch (error) {
    return { success: false, message: "An error occurred while registering" };
  }
}

module.exports = { login, register };

