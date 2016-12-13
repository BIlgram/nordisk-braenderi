import React, {Component} from 'react';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import {Link} from 'react-router';

class BatchesIndexPage extends Component {
    render() {
        return (
            <div className="page batches index">
                <ContentHeader title="Oversigt" subtitle="Produktion">
                    <div className="button-group">
                        <Link to="/batches/create" role="button">Opret</Link>
                        <Link to="/batches/trash" role="button">Skrald</Link>
                    </div>
                </ContentHeader>
            </div>
        );
    }
}

export default BatchesIndexPage;