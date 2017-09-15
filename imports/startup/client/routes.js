import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AppLayout from '/imports/ui/layouts/App';
import AuthLayout from '/imports/ui/layouts/Auth';

const routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthLayout}/>
        <Route path="/" component={AppLayout}/>
      </Switch>
    </BrowserRouter>
);

export default routes;