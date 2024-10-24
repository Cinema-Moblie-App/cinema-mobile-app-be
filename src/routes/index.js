import express from 'express';
import userRouter from './user.router.js';
import filmRouter from './film.router.js';
import newRouter from './new.router.js';
import seatRouter from './seat.route.js';

const router = express.Router()

router.use("/", userRouter);
router.use("/films", filmRouter);
router.use("/news", newRouter);
router.use("/seats", seatRouter);

export default router