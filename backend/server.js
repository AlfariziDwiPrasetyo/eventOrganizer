require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./src/utils/corsSetting");

app = express();

app.use(cors(corsOptions));
app.use(express.json());

//user route
const controllerUser = require("./src/user/user.controller");
const userRoute = controllerUser;
app.use("/api/v1/user", userRoute);

//event route
const controllerEvent = require("./src/event/event.controller");
const eventRoute = controllerEvent;
app.use("/api/v1/event", controllerEvent);

//error handler
const globalErrHandler = require("./src/middlewares/globalErrHandler");
app.use(globalErrHandler);

app.listen(process.env.PORT, () => {
  console.log("Server Running in " + process.env.PORT);
});
