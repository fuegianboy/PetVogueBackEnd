const { Router } = require('express');

const {createUser} = require("../controllers/users/createUsers.controller")
const {getUsers} = require("../controllers/users/getUsers.controller")
const {updateUser} = require("../controllers/users/updateUsers.controller")
const {deleteUser} = require("../controllers/users/deleteUsers.controller")

const usersRoutes = Router();

usersRoutes.post("/", createUser)
usersRoutes.get("/", getUsers)
usersRoutes.put("/:id", updateUser)
usersRoutes.delete("/:id", deleteUser)

module.exports = usersRoutes;