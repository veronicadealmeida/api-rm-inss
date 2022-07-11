import express from 'express';
import reportController from '../controllers/report.controller.js';

const router = express.Router();

router.post('/', reportController.startReport);

export default router;
