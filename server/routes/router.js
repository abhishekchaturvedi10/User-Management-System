const express = require('express')
const app = express();

const services = require('../services/render');
const controller = require('../controller/controller')

app.get('/', services.homeRoutes);

app.get('/add-user', services.add_user)

app.get('/update-user', services.update_user)

app.post(`/api/users`, controller.create);
app.get(`/api/users`, controller.find);
app.put(`/api/users:id`, controller.update);
app.delete(`/api/users:id`, controller.delete);

module.exports = app