import express from 'express';
import statusController from '../controllers/status.controller.js';

const router = express.Router();

router.get('/:id?', statusController.getStatus);

export default router;
