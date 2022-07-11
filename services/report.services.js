import reportRepository from '../repositories/report.repository.js';

async function report(cpfNumber) {
  const requestId = await reportRepository.getRequestId(cpfNumber);

  return { requestId };
}

export default { report };
