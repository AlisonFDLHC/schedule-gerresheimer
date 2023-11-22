import express from 'express';
import { getSchedules, getSchedule, confirmSchedule } from '../controllers/schedules/Schedules.js';

const router = express.Router();

router.get('/schedules', getSchedules);
router.get('/schedule', getSchedule);
router.post('/schedule/confirm', confirmSchedule);

export default router;