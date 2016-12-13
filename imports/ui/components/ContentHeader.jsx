import React, {Component} from 'react';

class ContentHeader extends Component {
    render() {
        const {title, subtitle, children} = this.props;

        return (
            <header className="content-header">
                <div className="titles">
                    <h2>{subtitle}</h2>
                    <h1>{title}</h1>
                </div>

                <div className="buttons">
                    {children}
                </div>
            </header>
        )
    }
}

export default ContentHeader;