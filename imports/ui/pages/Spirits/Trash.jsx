import React, {Component} from 'react';
import ContentHeader from '/imports/ui/components/ContentHeader.jsx';
import {Link} from 'react-router';
import spiritsTrashContainer from '/imports/ui/containers/spiritsTrash';
import moment from 'moment';

class SpiritsTrashPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spirits: this.props.spirits || null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            spirits: nextProps.spirits || null
        });
    }

    render() {
        const {spirits} = this.state;

        spirits.sort((a, b) => {
            return b.createdAt - a.createdAt
        });

        return (
            <div className="page spirits index">
                <ContentHeader title="Papirkurv" subtitle="Spiritustyper">
                    <div className="button-group">
                        <Link to="/spirits/create" role="button">Opret</Link>
                        <Link to="/spirits/trash" role="button">Skrald</Link>
                    </div>
                </ContentHeader>

                <table>
                    <thead>
                        <tr>
                            <th className="span">Type</th>
                            <th className="shrink">Slettelsesdato</th>
                            <th className="shrink">Oprettelsesdato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spirits.map((spirit, index) => {

                            return (
                                <tr key={'spirit_' + index}>
                                    <td><Link to={'/spirits/' + spirit._id}>{spirit.name}</Link></td>
                                    <td>{moment(spirit.deletedAt).format('DD-MM-YYYY')}</td>
                                    <td>{moment(spirit.createdAt).format('DD-MM-YYYY')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default spiritsTrashContainer(SpiritsTrashPage);