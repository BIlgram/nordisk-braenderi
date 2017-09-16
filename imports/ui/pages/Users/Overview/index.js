import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';

class UsersOverviewPage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Oversigt" subtitle="Users">
            <button>Opret</button>
            <button>Skrald</button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default UsersOverviewPage;