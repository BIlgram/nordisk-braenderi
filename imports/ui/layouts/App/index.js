import React from 'react';
import {Route} from 'react-router-dom';
import injectSheet from 'react-jss';

import Navigation from './Navigation';
import BatchesOverviewPage from '/imports/ui/pages/Batches/Overview';
import BatchesCreatePage from '/imports/ui/pages/Batches/Create';

const styles = {
  app: {
    width: 960,
    display: 'flex',
    margin: [0, 'auto'],
  },
  content: {
    flex: '1 1 auto',
    boxSizing: 'content-box',
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
            <Route exact path="/batches" component={BatchesOverviewPage}/>
            <Route exact path="/batches/create" component={BatchesCreatePage}/>
          </div>
        </div>
    );
  }
}

export default AppLayout;