const express = require("express");
const controllerUser = require("./src/user/user.controller");

app = express();

app.use(express.json());

//user route
const routerUser = controllerUser;
app.use("/api/v1/user", routerUser);

app.listen(3000, () => {
  console.log("Server Running in " + 3000);
});
