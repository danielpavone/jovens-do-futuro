const express = require('express');

const CompanyController = require('./controllers/CompanyController');
const CourseController = require('./controllers/CourseController');
const WorkshopController = require('./controllers/WorkshopController');
const OrderController = require('./controllers/OrderController');

const routes = express.Router();

// Company routes
routes.post('/company', CompanyController.store);
routes.get('/company', CompanyController.index);

// Course routes
routes.post('/course', CourseController.store);
routes.get('/course', CourseController.index);
routes.get('/course/:id', CourseController.show);

// Workshop routes
routes.post('/workshop', WorkshopController.store);
routes.get('/workshop', WorkshopController.index);
routes.get('/workshop/:id', WorkshopController.show);

// Order routes
routes.post('/order', OrderController.store);
module.exports = routes;