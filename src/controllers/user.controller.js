"use strict";
import UserSevice from '../services/user.service.js';

export const UserController = {
    login : async (req, res) => {
        try {
            const user = await UserSevice.login(req);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    register : async (req, res) => {
        try {
            const user = await UserSevice.register(req);
            console.log(user)
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

