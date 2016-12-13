import React, {Component} from 'react';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';

class BatchesShowPage extends Component {
    render() {
        return (
            <div className="page batches show">
                <h1>BatchesShowPage</h1>
                <ContentHeader title="Oversigt" category="Batches"/>
            </div>
        );
    }
}

export default BatchesShowPage;