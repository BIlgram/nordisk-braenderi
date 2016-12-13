import React, {Component} from 'react';
import {browserHistory} from "react-router";
import steps from '/imports/helpers/steps.js';
import {create} from "/imports/api/spirits/methods.js";
import Input from '/imports/ui/components/Input.jsx';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import ValidationErrors from '/imports/ui/components/ValidationErrors.jsx';
import ProductionProcessPicker from '/imports/ui/components/Process/Input.jsx';

class SpiritsCreatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            abv: null,
            recipe: null,
            process: [Object.keys(steps)[0]]
        };

        this.handleNameChange = this.handleInputChange.bind(this, 'name');
        this.handleABVChange = this.handleInputChange.bind(this, 'abv');
        this.handleRecipeChange = this.handleInputChange.bind(this, 'recipe');
        this.handleProcessChange = this.handleProcessChange.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    }

    handleInputChange(input, value) {
        this.setState({[input]: value});
    }

    handleProcessChange(process) {
        this.setState({process});
    }

    handleCreateSubmit(event) {
        event.preventDefault();

        const {name, abv, recipe, process} = this.state;

        create.call({
            name: name,
            abv: parseInt(abv) || abv,
            recipe: recipe,
            process: process
        }, (error, result) => {
            if (error) {
                this.setState({errors: error})
            } else {
                browserHistory.push({
                    pathname: '/spirits/' + result,
                    state: {
                        flash: {
                            message: 'lol?',
                            type: 'success'
                        }
                    }
                })
            }
        })
    }

    render() {
        const {loading} = this.props;
        const {name, abv, recipe, process, errors} = this.state;

        if (loading) {
            return <div>loading</div>;
        } else {
            return (
                <div className="page spirits create">
                    <ContentHeader title="Opret" subtitle="Spiritustyper"/>

                    <form onSubmit={this.handleCreateSubmit}>

                        <ValidationErrors errors={errors}/>

                        <Input type="text"
                               value={name}
                               onChange={this.handleNameChange}>
                            Navn<sup>*</sup>
                        </Input>

                        <Input type="text"
                               value={abv}
                               addons={{right: '%'}}
                               onChange={this.handleABVChange}>
                            Alkoholprocent<sup>*</sup>
                        </Input>

                        <Input type="textarea"
                               value={recipe}
                               onChange={this.handleRecipeChange}>
                            Opskrift
                        </Input>

                        <ProductionProcessPicker value={process}
                                                 onChange={this.handleProcessChange}>
                            Produktionsprocess<sup>*</sup>
                        </ProductionProcessPicker>

                        <button type="submit">Opret</button>
                    </form>
                </div>
            );
        }
    }
}

export default SpiritsCreatePage;