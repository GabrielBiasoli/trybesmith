import joi from 'joi';

const usernameMessages = {
  'any.required': 'Username is required',
  'string.base': 'Username must be a string',
  'string.min': 'Username must be longer than 2 characters',
};

const passwordMessages = {
  'any.required': 'Password is required',
  'string.base': 'Password must be a string',
  'string.min': 'Password must be longer than 7 characters',
};

const classeMessages = {
  'any.required': 'Classe is required',
  'string.base': 'Classe must be a string',
  'string.min': 'Classe must be longer than 2 characters',
};

const levelMessages = {
  'any.required': 'Level is required',
  'number.base': 'Level must be a number',
  'number.greater': 'Level must be greater than 0',
};

export const newUserSchema = joi.object({
  username: joi.string().min(3).required().messages(usernameMessages),
  classe: joi.string().min(3).required().messages(classeMessages),
  level: joi.number().greater(0).required().messages(levelMessages),
  password: joi.string().min(8).required().messages(passwordMessages),
});

export const userLoginSchema = joi.object({
  username: joi.required().messages(usernameMessages),
  password: joi.required().messages(passwordMessages),
});
