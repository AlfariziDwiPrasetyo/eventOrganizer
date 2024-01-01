const multer = require("multer");
const storage = require("../utils/cloudinaryConfig");

const upload = multer({ storage });

module.exports = upload;
