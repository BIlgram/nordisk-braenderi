import React, {Component} from 'react';
import {browserHistory} from "react-router";
import {update, remove, restore} from "/imports/api/spirits/methods.js";
import spiritContainer from "/imports/ui/containers/spirit";
import Input from '/imports/ui/components/Input.jsx';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import ValidationErrors from '/imports/ui/components/ValidationErrors.jsx';
import ProductionProcessPicker from '/imports/ui/components/Process/Input.jsx';

class SpiritsShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.spirit ? this.props.spirit._id : null,
            name: this.props.spirit ? this.props.spirit.name : null,
            abv: this.props.spirit ? this.props.spirit.abv : null,
            recipe: this.props.spirit ? this.props.spirit.recipe : null,
            process: this.props.spirit ? this.props.spirit.process : null,
            deletedAt: this.props.spirit ? this.props.spirit.deletedAt : null,
        };

        this.title = this.props.spirit ? this.props.spirit.name : null;
        this.handleNameChange = this.handleInputChange.bind(this, 'name');
        this.handleABVChange = this.handleInputChange.bind(this, 'abv');
        this.handleRecipeChange = this.handleInputChange.bind(this, 'recipe');
        this.handleProcessChange = this.handleProcessChange.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleRestoreClick = this.handleRestoreClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.spirit ? nextProps.spirit._id : null,
            name: nextProps.spirit ? nextProps.spirit.name : null,
            abv: nextProps.spirit ? nextProps.spirit.abv : null,
            recipe: nextProps.spirit ? nextProps.spirit.recipe : null,
            process: nextProps.spirit ? nextProps.spirit.process : null,
        });

        this.title = nextProps.spirit ? nextProps.spirit.name : null;
    }

    handleInputChange(input, value) {
        this.setState({[input]: value});
    }

    handleProcessChange(process) {
        this.setState({process});
    }

    handleUpdateSubmit(event) {
        event.preventDefault();

        const {id, name, abv, recipe, process} = this.state;

        update.call({
            id: id,
            name: name,
            abv: parseInt(abv) || abv,
            recipe: recipe,
            process: process
        }, (error) => {
            if (error) {
                this.setState({errors: error})
            } else {
                this.setState({errors: error});
                this.props.router.push({
                    pathname: '/spirits/' + id,
                    state: {
                        flash: {
                            message: 'Spiritustypen blev opdateret!',
                            type: 'success'
                        }
                    }
                });
            }
        })
    }

    handleRemoveClick() {
        remove.call({id: this.state.id}, (error) => {
            if (error) {
                this.setState({errors: error});
            } else {
                browserHistory.push('/spirits');
            }
        })
    }

    handleRestoreClick() {
        restore.call({id: this.state.id}, (error) => {
            if (error) {
                this.setState({errors: error});
            } else {
                this.setState({deletedAt: '', errors: null});
            }
        })
    }

    renderRemoveRestoreButton() {
        if (this.state.deletedAt) {
            return <button type="button" onClick={this.handleRestoreClick}>Genopret</button>
        } else {
            return <button type="button" onClick={this.handleRemoveClick}>Fjern</button>
        }
    }

    render() {
        const {loading} = this.props;
        const {name, abv, recipe, process, errors} = this.state;

        if (loading) {
            return <div>loading</div>;
        } else {
            return (
                <div className="page spirits show">
                    <ContentHeader title={this.title} subtitle="Spiritustyper">
                        {this.renderRemoveRestoreButton()}
                    </ContentHeader>

                    <form onSubmit={this.handleUpdateSubmit}>
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

                        <button type="submit">Gem</button>
                    </form>
                </div>
            );
        }
    }
}

export default spiritContainer(SpiritsShowPage);