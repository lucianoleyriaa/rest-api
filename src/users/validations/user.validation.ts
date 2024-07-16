import Joi from "joi";

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(), 
  age: Joi.number().required().prefs({ convert: false }),
});

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  age: Joi.number().optional().prefs({ convert: false }),
}).or('name', 'email', 'age').messages({
  'object.missing': 'At least one of name, email or age are required!',
});


export { 
  createUserSchema,
  updateUserSchema,
}