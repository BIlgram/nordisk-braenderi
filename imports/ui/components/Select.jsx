import React, {Component} from "react";

class Select extends Component {
    renderOptions() {
        const {options} = this.props;

        if (options instanceof Array) {
            return options.map((value, index) => <option key={'option_' + index}>{value}</option>)
        } else {
            return Object.keys(options).map((value, index) => {
                return <option value={value} key={'option_' + index}>{options[value]}</option>
            })
        }
    }

    renderDisabled() {
        const {children} = this.props;

        if (children) {
            return <option disabled value="">{children}</option>
        }
    }

    render() {
        const {options, ...other} = this.props;

        return (
            <select className="input-field" {...other}>
                {this.renderDisabled()}
                {this.renderOptions()}
            </select>
        )
    }
}

export default Select;