import React from 'react';

import Icon from '/imports/ui/components/Icon';
import Button from '/imports/ui/components/Button';
import PageHeader from '/imports/ui/components/PageHeader';

class BatchesOverviewPage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Oversigt" subtitle="Batches">
            <Button title="Opret" href="/batches/create">
              <Icon icon="create"/>
            </Button>
            <Button title="Skrald" href="/batches/trash">
              <Icon icon="trash"/>
            </Button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default BatchesOverviewPage;