const Bank = require('../models/bank');
const NotFoundError = require('../errors/not-found-err');
const NotValidDate = require('../errors/not-valid-date');

const getAllBanks = (req, res, next) => {
  Bank.find({})
    .orFail(() => new NotFoundError('В базе нет ни одного банка'))
    .then((bank) => {
      res.status(200).send( bank );
    })
    .catch(next);
};

const createNewBank = (req, res, next) => {
  const {
    name, bik, address, corrAccount,
  } = req.body;
  Bank.create({
    name, bik, address, corrAccount,
  })
    .then((bank) => {
      if (!bank) {
        throw new NotValidDate('Переданы некорректные данные');
      }
      res.status(200).send( bank );
    })
    .catch(next);
};

const updateBank = (req, res, next) => {
  const {
    name, bik, address, corrAccount,
  } = req.body;
  Bank.findOneAndUpdate(
    { bik },
    {
      name, bik, address, corrAccount
    },
    {
      new: true,
      runValidators: true,
      upsert: false
    }
  )
    .then((bank) => res.send( bank ))
    .catch(next);
};

module.exports = {
  getAllBanks,
  createNewBank,
  updateBank,
}