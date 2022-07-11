import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getData() {
  const data = JSON.parse(await readFile('./db/inssRetValues.json'));
  return data;
}

async function getInssRetValues() {
  const data = await getData();

  return data;
}

export default { getInssRetValues };
