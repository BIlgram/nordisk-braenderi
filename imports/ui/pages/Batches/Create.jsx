import React, {Component} from 'react';
import Input from '/imports/ui/components/Input.jsx';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import collectionToSelectOptions from '/imports/helpers/collectionToSelectOptions';
import spiritsContainer from '/imports/ui/containers/spirits';

class BatchesCreatePage extends Component {
    constructor(props) {
        super(props);

        const {spirits} = this.props;

        this.state = {
            spirit: null,
            spirits: spirits || null,
        };

        this.handleSpiritChange = this.handleSpiritChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            spirits: nextProps.spirits || null
        });
    }

    handleSpiritChange() {

    }

    handleDateChange() {

    }

    handleNameChange() {

    }

    handleCommentChange() {

    }

    render() {
        const {loading} = this.props;
        const {spirit, spirits} = this.state;


        if (loading) {
            return <div>loading</div>;
        } else {
            return (
                <div className="page batches create">
                    <ContentHeader title="Opret batch" subtitle="Produktion"/>

                    <form onSubmit={this.handleCreateSubmit}>
                        <Input type="select"
                               value={spirit}
                               placeholder="Vælg Spiritustype"
                               options={collectionToSelectOptions(spirits, '_id', 'name')}
                               onChange={this.handleSpiritChange}>
                            Spiritustype<sup>*</sup>
                        </Input>

                        {/*<Input type="text"*/}
                               {/*value={date}*/}
                               {/*onChange={this.handleDateChange}>*/}
                            {/*Dato<sup>*</sup>*/}
                        {/*</Input>*/}

                        {/*<Input type="text"*/}
                               {/*value={name}*/}
                               {/*onChange={this.handleNameChange}>*/}
                            {/*Navn<sup>*</sup>*/}
                        {/*</Input>*/}

                        {/*<Input type="textarea"*/}
                               {/*value={comment}*/}
                               {/*onChange={this.handleCommentChange}>*/}
                            {/*Kommentar*/}
                        {/*</Input>*/}
                    </form>
                </div>
            );
        }
    }
}

export default spiritsContainer(BatchesCreatePage);