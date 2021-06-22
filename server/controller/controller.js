var Userdb = require('../model/model');

exports.create = (req, res) => {
  
  if(!req.body) {
    res.status(400).send({message: "Content cannot be empty!"});
    return;
  }

  const user = new Userdb ({
    name: req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
  });

  user  
    .save(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while creating a create operation"
      })
    })
}

exports.find = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}