import Joi from "joi";

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(), 
  age: Joi.number().required().prefs({ convert: false }),
});

export { 
  registerUserSchema
}