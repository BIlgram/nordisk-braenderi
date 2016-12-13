import React, {Component} from 'react';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import Datepicker from '/imports/ui/components/Datepicker/Datepicker.jsx';

class BatchesCreatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="page batches create">
                <ContentHeader title="Opret batch" subtitle="Produktion"/>

                <form>

                    <Datepicker value={this.state.date} onChange={this.handleDateChange}/>
                </form>
            </div>
        );
    }
}

export default BatchesCreatePage;