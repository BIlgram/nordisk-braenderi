import React from 'react';

import PageHeader from '/imports/ui/components/PageHeader';
import Input from '/imports/ui/components/Input';
import InputGroup from '/imports/ui/components/InputGroup';
import Button from '/imports/ui/components/Button';

class BatchesCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    console.log(value);
  }

  render() {
    return (
        <div>
          <PageHeader title="Opret" subtitle="Batches"/>

          <form onSubmit={this.handleSubmit}>
            <Input label="Spiritustype"/>
            <Input label="Oprettelsesdato"/>
            <Input label="Navn"/>


            {/*<InputGroup ratio="6:6">*/}
              {/*<Input label="Fornavn"/>*/}
              {/*<Input label="Efternavn"/>*/}
            {/*</InputGroup>*/}

            {/*<InputGroup ratio="4:1:7">*/}
              {/*<Input label="By"/>*/}
              {/*<Input label="Postnummer"/>*/}
              {/*<Input label="Region"/>*/}
            {/*</InputGroup>*/}

            <Button submit color="green">Opret</Button>
          </form>
        </div>
    );
  }
}

export default BatchesCreatePage;