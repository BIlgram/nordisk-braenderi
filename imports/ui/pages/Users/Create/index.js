import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';

class UsersCreatePage extends React.Component {
  render() {
    return (
        <div>
          <PageHeader title="Opret" subtitle="Users">
            <button>Opret</button>
            <button>Skrald</button>
          </PageHeader>
          body
        </div>
    );
  }
}

export default UsersCreatePage;