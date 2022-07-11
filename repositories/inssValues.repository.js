import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getData() {
  const data = JSON.parse(await readFile('./db/inssValues.json'));
  return data;
}

async function getInssValues() {
  const data = await getData();

  return data;
}

export default { getInssValues };
