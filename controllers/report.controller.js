import reportServices from '../services/report.services.js';

async function startReport(req, res) {
  let cpfNumber = req.body.cpfNumber ? req.body.cpfNumber[0] : '';
  console.log('POST ' + cpfNumber);

  res.send(await reportServices.report(cpfNumber));
}

export default { startReport };
