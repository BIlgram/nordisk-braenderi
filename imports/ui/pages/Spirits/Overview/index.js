import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Icon from '/imports/ui/components/Icon';
import Button from '/imports/ui/components/Button';
import PageHeader from '/imports/ui/components/PageHeader';
import Spirits from '/imports/api/spirits/spirits';

class SpiritsOverviewPage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Oversigt" subtitle="Spiritustype">
            <Button title="Opret" href="/spirits/create">
              <Icon icon="plus"/>
            </Button>
            <Button title="Skrald" href="/spirits/trash">
              <Icon icon="trash"/>
            </Button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('spirits');

  return {
    loading: !handle.ready(),
    spirits: Spirits.find().fetch(),
  };
}, SpiritsOverviewPage);