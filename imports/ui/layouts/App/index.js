import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import injectSheet from 'react-jss';

import Navigation from './Navigation';
import BatchesPage from '/imports/ui/pages/Batches';
import SpiritsPage from '/imports/ui/pages/Spirits';
import UsersPage from '/imports/ui/pages/Users';
import StatementsPage from '/imports/ui/pages/Statements';

const styles = {
  app: {
    width: 960,
    display: 'flex',
    margin: [0, 'auto'],
  },
  content: {
    flex: '1 1 auto',
    padding: 16,
  },
};

@injectSheet(styles)
class AppLayout extends React.Component {
  render() {
    const {classes} = this.props;

    return (
        <div className={classes.app}>
          <Navigation/>
          <div className={classes.content}>
            <Switch>
              <Route path="/batches" component={BatchesPage}/>
              <Route path="/spirits" component={SpiritsPage}/>
              <Route path="/users" component={UsersPage}/>
              <Route path="/statements" component={StatementsPage}/>
              <Redirect from="/" to="/batches"/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default AppLayout;