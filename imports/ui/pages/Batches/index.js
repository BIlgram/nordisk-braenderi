import React from 'react';
import {Switch, Route} from 'react-router-dom';

import OverviewPage from './Overview';
import CreatePage from './Create';
import TrashPage from './Trash';

const BatchesPage = ({match}) => {
  return (
      <Switch>
        <Route exact path={match.path} component={OverviewPage}/>
        <Route exact path={match.path + '/create'} component={CreatePage}/>
        <Route exact path={match.path + '/trash'} component={TrashPage}/>
      </Switch>
  );
};

export default BatchesPage;