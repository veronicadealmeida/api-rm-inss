async function getCompany(req, res) {
  if (req.params) {
    const branch = req.params.id;
    var branchRM = '';

    switch (branch) {
      case 'T1D MG 01 ':
        branchRM = '01';
        break;
      case 'T1D MG 02 ':
        branchRM = '01';
        break;
      default:
        branchRM = '02';
        break;
    }
  }

  res.send({ companyId: branchRM });
}

export default {
  getCompany,
};
