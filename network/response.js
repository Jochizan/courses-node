module.exports = {
  success: (req, res, message, status) => {
    res.status(status || 200).send({ err: '', message });
  },
  error: (req, res, err, status) => {
    res.status(status || 200).send({ err, message: '' });
  }
};
