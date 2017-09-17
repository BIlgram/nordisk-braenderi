import React from 'react';
import {Switch, Route} from 'react-router-dom';

import OverviewPage from './Overview';
import CreatePage from './Create';
import ShowPage from './Show';

const SpiritsPage = ({match}) => {
  return (
      <Switch>
        <Route exact path={match.path} component={OverviewPage}/>
        <Route exact path={match.path + '/create'} component={CreatePage}/>
        <Route exact path={match.path + '/:id'} component={ShowPage}/>
      </Switch>
  );
};

export default SpiritsPage;