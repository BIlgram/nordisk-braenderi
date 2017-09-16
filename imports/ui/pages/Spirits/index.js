import React from 'react';
import {Switch, Route} from 'react-router-dom';

import OverviewPage from './Overview';
import CreatePage from './Create';

const SpiritsPage = ({match}) => {
  return (
      <Switch>
        <Route exact path={match.path} component={OverviewPage}/>
        <Route exact path={match.path + '/create'} component={CreatePage}/>
      </Switch>
  );
};

export default SpiritsPage;