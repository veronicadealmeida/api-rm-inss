import express from 'express';
import inssValuesController from '../controllers/inssValues.controller.js';

const router = express.Router();

router.get('/', inssValuesController.getInssValues);

export default router;
