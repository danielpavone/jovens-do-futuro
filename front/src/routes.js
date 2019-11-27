import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainPage from './pages/Main';
import CoursesPage from './pages/Courses';
import OrderPage from './pages/Order';

function Routes() {
    return (
        <Router>
            <Route exact path='/' component={MainPage} />
            <Route path='/courses' component={CoursesPage} />
            <Route path='/order' component={OrderPage} />
        </Router>
    );
}
  
export default Routes;