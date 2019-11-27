import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainPage from './pages/Main';

function Routes() {
    return (
        <Router>
            <Route path='/' component={MainPage} />
        </Router>
    );
}
  
export default Routes;