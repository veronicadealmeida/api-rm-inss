import express from 'express';
import { promises as fs } from 'fs';
import statusRouter from './routes/status.route.js';
import companyRouter from './routes/company.route.js';
import reportRouter from './routes/report.route.js';
import inssRetValuesRouter from './routes/inssRetValues.route.js';
import inssValuesRouter from './routes/inssValues.route.js';

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json()); // uso de middleware

app.use('/rest/api/rh/esocial/v1/reportEsocialBaseConfer', reportRouter);

app.use(
  '/rest/api/rh/esocial/v1/reportEsocialBaseConfer/company',
  companyRouter
);

app.use('/rest/api/rh/esocial/v1/reportEsocialBaseConfer/status', statusRouter);

app.use(
  '/rest/api/rh/esocial/v1/reportEsocialBaseConfer/InssRetValues',
  inssRetValuesRouter
);

app.use(
  '/rest/api/rh/esocial/v1/reportEsocialBaseConfer/InssValues',
  inssValuesRouter
);

app.listen(3002, async () => {
  console.log('API Started!');
});

app.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
