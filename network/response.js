const chalk = require('chalk');

module.exports = {
  success: (req, res, message, status) => {
    res.status(status || 200).send({ err: '', message });
  },
  error: (req, res, err, status, details) => {
    console.error(chalk.red('[response error] ' + details));

    res.status(status || 200).send({ err, message: '' });
  }
};
