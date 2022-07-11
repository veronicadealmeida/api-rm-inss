import inssRetValuesRepository from '../repositories/inssRetValues.repository.js';

async function getInssRetValues() {
  const InssRetValues = await inssRetValuesRepository.getInssRetValues();

  return InssRetValues;
}

export default { getInssRetValues };
