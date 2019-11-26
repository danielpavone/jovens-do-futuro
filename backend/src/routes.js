const express = require('express');

const CompanyController = require('./controllers/CompanyController');
const CourseController = require('./controllers/CourseController');

const routes = express.Router();

// Company routes
routes.post('/company', CompanyController.store);
routes.get('/company', CompanyController.index);

// Course routes
routes.post('/course', CourseController.store);
routes.get('/course', CourseController.index);
routes.get('/course/:id', CourseController.show);

module.exports = routes;