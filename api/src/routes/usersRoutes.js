const { Router } = require('express');

const {createUser} = require("../controllers/users/createUsers.controller")
const {getUsers} = require("../controllers/users/getUsers.controller")
const {updateUser} = require("../controllers/users/updateUsers.controller")
const {deleteUser} = require("../controllers/users/deleteUsers.controller");
const { restoreUser } = require('../controllers/users/restoreUsers.controllers');

const usersRoutes = Router();

usersRoutes.post("/create", createUser)
usersRoutes.delete("/delete/:id", deleteUser)
usersRoutes.post("/get", getUsers)
usersRoutes.put("/update/:id", updateUser)
usersRoutes.patch("/restore/:id", restoreUser)

module.exports = usersRoutes;