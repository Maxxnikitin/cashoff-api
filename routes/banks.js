const routerBanks = require('express').Router();
const { getAllBanks, createNewBank, updateBank, } = require('../controllers/banks');
const { celebrate, Joi } = require('celebrate');

routerBanks.post('/add', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    bik: Joi.string().required().min(9).max(9),
    address: Joi.string().required(),
    corrAccount: Joi.string().required().min(20).max(20),
  }),
}), createNewBank);

routerBanks.get('/', getAllBanks);

routerBanks.patch('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    bik: Joi.string().required().min(9).max(9),
    address: Joi.string().required(),
    corrAccount: Joi.string().required().min(20).max(20),
  }),
}), updateBank);

module.exports = routerBanks;
