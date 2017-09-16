import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';

class SpiritsOverviewPage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Oversigt" subtitle="Spirits">
            <button>Opret</button>
            <button>Skrald</button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default SpiritsOverviewPage;