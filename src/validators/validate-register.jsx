import Joi from "joi";

const registerSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required().trim().messages({
    "string.empty": "username is required",
    "string.alphanum": "username should not contain any special character",
    "string.min": "username must have at least 3 characters",
  }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password should not contain any special character",
    "string.min": "password must have at least 6 characters",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "password and confirm did not match",
      "string.empty": "confirm password is required",
    })
    .strip(),
  firstName: Joi.string().trim().required().messages({
    "string.empty": "first name is required",
    "string.base": "first name must be a string",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "last name is required",
    "string.base": "last name must be a string",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .trim()
    .messages({
      "string.empty": "phone is required",
      "string.base": "phone must be a string",
    }),
  idCard: Joi.string().length(13).trim().required().messages({
    "string.empty": "idCard number is required",
    "string.length": "idCard number must be 13 characters long",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
