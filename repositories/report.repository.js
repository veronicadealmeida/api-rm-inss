import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getRequestId(cpfNumber) {
  const dataValues = JSON.parse(await readFile('./db/inssValues.db.json'));
  const dataRetValues = JSON.parse(
    await readFile('./db/inssRetValues.db.json')
  );
  const requestId = 'vda-d6c5-51cc-6ee1-7acc-00d69061a71a';

  if (cpfNumber) {
    dataValues.items = dataValues.items.filter(
      (p) => p.cpfNumber === cpfNumber
    );
    dataRetValues.items = dataRetValues.items.filter(
      (p) => p.cpfNumber === cpfNumber
    );
  }

  await writeFile('./db/inssValues.json', JSON.stringify(dataValues, null, 2));
  await writeFile(
    './db/inssRetValues.json',
    JSON.stringify(dataRetValues, null, 2)
  );

  return requestId;
}

export default { getRequestId };
