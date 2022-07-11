import express from 'express';
import inssRetValuesController from '../controllers/inssRetValues.controller.js';

const router = express.Router();

router.get('/', inssRetValuesController.getInssRetValues);

export default router;
