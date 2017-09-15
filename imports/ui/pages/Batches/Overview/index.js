import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';

class BatchesOverviewPage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Oversigt" subtitle="Batches">
            <button>Opret</button>
            <button>Skrald</button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default BatchesOverviewPage;