import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainPage from './pages/Main';
import CoursesPage from './pages/Courses';

function Routes() {
    return (
        <Router>
            <Route exact path='/' component={MainPage} />
            <Route path='/courses' component={CoursesPage} />
        </Router>
    );
}
  
export default Routes;