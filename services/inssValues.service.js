import inssValuesRepository from '../repositories/inssValues.repository.js';

async function getInssValues() {
  const InssValues = await inssValuesRepository.getInssValues();

  return InssValues;
}

export default { getInssValues };
