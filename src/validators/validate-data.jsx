import Joi from "joi";

const dataSchema = Joi.object({
  weight: Joi.number().positive().less(150).required(),
  height: Joi.number().positive().less(250).required(),
  date: Joi.date().greater("1-1-1920").required(),
});

const validateData = (input) => {
  const { error } = dataSchema.validate(input, {
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

export default validateData;
