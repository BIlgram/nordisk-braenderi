import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import injectSheet from 'react-jss';
import productionSteps from '/imports/productionSteps';
import PageHeader from '/imports/ui/components/PageHeader';
import Loading from '/imports/ui/components/Loading';
import Input from '/imports/ui/components/Input';
import InputGroup from '/imports/ui/components/InputGroup';
import Button from '/imports/ui/components/Button';
import ProductionProcess from '/imports/ui/components/ProductionProcess';
import {update} from '/imports/api/spirits/methods';
import {Spirits} from '/imports/api/spirits/spirits.js';
import Page from '/imports/ui/components/Page';

class SpiritsShowPage extends React.Component {
  constructor(props) {
    super(props);

    const {spirit} = this.props;

    this.state = {
      name: spirit ? spirit.name : '',
      abv: spirit ? spirit.abv : 0,
      recipe: spirit ? spirit.recipe : '',
      process: spirit ? spirit.process : [productionSteps[0]],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleInputChange.bind(this, 'name');
    this.handleABVChange = this.handleInputChange.bind(this, 'abv');
    this.handleRecipeChange = this.handleInputChange.bind(this, 'recipe');
    this.handleProcessChange = this.handleProcessChange.bind(this);
  }

  componentWillReceiveProps({spirit}) {
    this.setState({
      name: spirit.name,
      abv: spirit.abv,
      recipe: spirit.recipe,
      process: spirit.process,
    });
  }

  handleInputChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleProcessChange(process) {
    this.setState({process});
  }

  handleSubmit(event) {
    event.preventDefault();

    const {name, abv, recipe, process} = this.state;
    // create.call({name, abv: parseFloat(abv), recipe, process}, (err, res) => {
    //   console.log(err, res);
    // });
  }

  render() {
    const {name, abv, recipe} = this.state;

    if (this.props.loading) return <Loading/>;

    return (
        <Page>
          <PageHeader title="Opret" subtitle="Spirits"/>

          <form onSubmit={this.handleSubmit}>
            <InputGroup ratio="10:2">
              <Input label="Navn" value={name} onChange={this.handleNameChange}/>
              <Input label="Alkohol" value={abv} onChange={this.handleABVChange}/>
            </InputGroup>

            <Input label="Opskrift" value={recipe} onChange={this.handleRecipeChange}/>
            <ProductionProcess value={this.state.process} onChange={this.handleProcessChange}/>
            <Button submit color="green">Gem</Button>
          </form>
        </Page>
    );
  }
}

export default createContainer(({match}) => {
  const handle = Meteor.subscribe('spirit', match.params.id);

  return {
    loading: !handle.ready(),
    spirit: Spirits.find(match.params.id).fetch()[0],
  };
}, SpiritsShowPage);