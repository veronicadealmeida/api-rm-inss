import express from 'express';
import companyController from '../controllers/company.controller.js';

const router = express.Router();

router.get('/:id?', companyController.getCompany);

export default router;
