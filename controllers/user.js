const db = require("../models");

module.exports = {
  getUsers(req, res) {
    db.User.findAll()
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  getUser(req, res) {
    const id = req.params.id;
    db.User.findOne({
      where: { id: id },
    })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    db.User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    db.User.update(
      {
        name: req.body,
        email: req.body,
        password: req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    const id = req.params.id;
    db.User.destroy({
      where: {
        id: id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  },
  getUserData(req, res) {
    const { email, id, name, Jobs } = req.user || {};
    res.json({ email, id, name, Jobs });
  },
};
