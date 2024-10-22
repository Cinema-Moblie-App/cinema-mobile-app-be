import userRepository from "../repositories/user.repository.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userService = {
    login: async (req) => {
        const { gmail, password } = req.body;
        console.log(req.body);
        try {
            const user = await userRepository.findUserByEmail(gmail);
            if (!user) {
                return { message: "Error", content: "User not found" };
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return { message: "Error", content: "Invalid password" };
            }

            console.log("isPasswordValid:" + isPasswordValid);

            const token = jwt.sign(
                { userId: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            return { message: "Login successful", token };
        } catch (error) {
            return { message: "Error", content: error.toString() };
        }
    },
    register: async (req) => {
        const { gmail, password, firstname, lastname, phone_number } = req.body;
        const fullname = firstname + " " + lastname;
        try {
            const user = await userRepository.findUserByEmail(gmail);
            if (user) {
                return { message: "Error", content: "User already exists" };
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                gmail,
                fullname,
                phone_number,
                status: "active",
                role_id: 1,
                password: hashedPassword
            };
            const createdUser = await userRepository.createUser(newUser);
            return { message: "Success", content: createdUser };
        } catch (error) {
            return { message: "Error", content: error.toString() };
        }
    }



};

export default userService;