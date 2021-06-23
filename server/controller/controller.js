var Userdb = require('../model/model');

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
  });

  user
    .save(user)
    .then(data => {
      res.redirect("/add-user");
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation"
      })
    })
}

exports.find = (req, res) => {

  if (req.query.id) {

    const id = req.query.id;

    Userdb.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id = " + id });
        } else {
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({ message: "Error retrieving user with id = " + id });
      })

    return;
  }

  Userdb.find()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error occurred while retrieving user data" });
    })
}

exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({ message: err.message || "Data to update cannot be empty" });
  }

  const id = req.params.id;

  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot update user with id = ${id}` });
      }
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error in updating user data" });
    })
}

exports.delete = (req, res) => {

  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete user with id = ${id}` });
      }
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({ message: `Error in deleting user with id = ${id}` });
    })
}