import React, {Component} from 'react';
import {browserHistory} from "react-router";

class HomePage extends Component {
    componentWillMount() {
        browserHistory.push('/batches');
    }

    render() {
        return null;
    }
}

export default HomePage;