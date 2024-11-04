"use strict";

import express from 'express';
import { TicketController } from '../controllers/ticket.controller.js';

const userRouter = express.Router()

userRouter.post("/create", TicketController.login);



export default userRouter;







