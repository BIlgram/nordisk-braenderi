import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Flashes extends Component {
    constructor(props) {
        super(props);

        const {source} = this.props;

        this.state = {
            type: this.isValidFlash(source) ? source.state.flash.type : '',
            message: this.isValidFlash(source) ? source.state.flash.message : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {source} = nextProps;

        this.setState({
            type: this.isValidFlash(source) ? source.state.flash.type : '',
            message: this.isValidFlash(source) ? source.state.flash.message : ''
        })
    }

    isValidFlash(location) {
        return location.state && location.state.flash && location.action != 'POP';
    }

    renderFlash() {
        const {type, message} = this.state;

        if (type && message) {
            return <div className={'flash ' + type} key={'flash_' + new Date().getTime()}>{message}</div>
        }

        return null;
    }

    render() {

        return (
            <ReactCSSTransitionGroup
                className="flashes"
                transitionName="flash"
                transitionAppear={true}
                transitionAppearTimeout={3000}
                transitionLeaveTimeout={3000}
                transitionEnterTimeout={3000}>
                {this.renderFlash()}
            </ReactCSSTransitionGroup>
        )
    }
}

export default Flashes;