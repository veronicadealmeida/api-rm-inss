async function getStatus(req, res) {
  res.send({ percent: 100, finished: true });
}

export default {
  getStatus,
};
