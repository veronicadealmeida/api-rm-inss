import inssRetValuesService from '../services/inssRetValues.service.js';

async function getInssRetValues(req, res, next) {
  try {
    res.send(await inssRetValuesService.getInssRetValues());
  } catch (err) {
    next(err);
  }
}

export default { getInssRetValues };
