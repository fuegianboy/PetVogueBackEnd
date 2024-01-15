const { Router } = require("express");

const { createUser } = require("../controllers/users/createUsers.controller");
const { getUsers } = require("../controllers/users/getUsers.controller");
const { updateUser } = require("../controllers/users/updateUsers.controller");
const { deleteUser } = require("../controllers/users/deleteUsers.controller");
const { restoreUser } = require("../controllers/users/restoreUsers.controllers");
const { loginUsers } = require("../controllers/users/loginUsers.controller");
const { addCart } = require("../controllers/users/addCart")
const { removeCart } = require("../controllers/users/removeCart")
/* const { isAuthenticated } = require("../utils/ValidateToken"); */
const { registerUser } = require("../controllers/users/registerUser.controller");
const { adminLogin } = require("../controllers/users/adminLogin.controller");


const usersRoutes = Router();

usersRoutes.post("/create", createUser);
usersRoutes.delete("/delete/:id", deleteUser);
usersRoutes.post("/get", getUsers);
usersRoutes.put("/update/:id", updateUser);
usersRoutes.patch("/restore/:id", restoreUser);
usersRoutes.post("/login", loginUsers);

usersRoutes.put("/addcart", addCart);
usersRoutes.put("/removecart", removeCart);

usersRoutes.post("/register", registerUser);
usersRoutes.post("/admin/login", adminLogin)

module.exports = usersRoutes;
