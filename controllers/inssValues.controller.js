import inssValuesService from '../services/inssValues.service.js';

async function getInssValues(req, res, next) {
  try {
    res.send(await inssValuesService.getInssValues());
  } catch (err) {
    next(err);
  }
}

export default { getInssValues };
