import Joi from "joi";

export const validateActivity = (activity) => {
  const schema = Joi.object({
    description: Joi.string().min(2).max(30).required(),
    status: Joi.string()
      .min(2)
      .max(10)
      .valid("pending", "cancelled", "completed")
      .required(),
    fromDate: Joi.date().min(Date.now()).required(),
    toDate: Joi.date().min(Joi.ref("fromDate")).required(),
  });

  return schema.validate(activity);
};
