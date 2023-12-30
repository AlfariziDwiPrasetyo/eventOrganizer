const joi = require("joi");
const validateEventPost = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(120).required(),
    description: joi.string().required(),
    address: joi.string().required(),
    date: joi.date().iso().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details.map((detail) => detail.message) });
  }
  next();
};

module.exports = validateEventPost;
