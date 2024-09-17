import NEWUser from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const SignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await NEWUser.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const createdUser = new NEWUser({
      name,
      email,
      password: hashPassword,
    });
    await createdUser.save();

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      createdUser,
    });
  } catch (error) {
    console.log("Error in register controller ", error);
    return res.status(404).json({
      success: true,
      message: "Error while User registered",
    });
  }
};

export const login = async (req, res) => {
     try {
         const { email, password } = req.body;
         
         if (!email || !password) {
             return res.status(400).json({ error: "All fields are required" });
         }
         const user = await NEWUser.findOne({ email });
         const MatchPassword = bcrypt.compare(password, user.password);
         if (!user ||!MatchPassword) {
             return res.status(401).json({ error: "Invalid credentials" });
         }
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         return res.status(200).json({
             success: true,
             message: "User logged in successfully",
             token,
             user
         });
     } catch (error) {
        console.log("Error in register controller ", error);
        return res.status(404).json({
          success: true,
          message: "Error while User loggin",
        });
     }
 }
