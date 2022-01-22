import React from 'react';

// Lib imports
import { Route, Switch } from 'react-router-dom';

// Component imports
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
    </Switch>
  );
};

export default Routes;
