const { response } = require("express");

const userGet = (req, res = response) => {
  const { q, nombre, page = 1 } = req.query;

  res.status(403).json({
    msg: "Peticion get - Controlador",
    q,
    nombre,
    page,
  });
};
const userPut = (req, res) => {
  const id = req.params.id;

  res.status(403).json({
    msg: "Peticion put - Controlador",
    id,
  });
};
const userPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(403).json({
    msg: "Peticion post - Controlador",
    nombre,
    edad,
  });
};
const userDelete = (req, res) => {
  res.status(403).json({
    msg: "Peticion delete - Controlador",
  });
};
const userPatch = (req, res) => {
  res.status(500).json({
    msg: "Peticion patch - Controlador",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete,
  userPatch,
};
