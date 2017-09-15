import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';

class BatchesCreatePage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Opret" subtitle="Batches">
            <button>Opret</button>
            <button>Skrald</button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default BatchesCreatePage;