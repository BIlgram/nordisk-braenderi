import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    renderLeftAddon(addons) {
        if (addons && addons.left)
            return (
                <span className="input-addon input-addon-left">
                    {addons.left}
                </span>
            )
    }

    renderRightAddon(addons) {
        if (addons && addons.right)
            return (
                <span className="input-addon input-addon-right">
                    {addons.right}
                </span>
            )
    }

    handleOnChange(event) {
        this.props.onChange(event.target.value == '' ? null : event.target.value);
    }

    render() {
        const {children, type, addons, value, onChange, ...other} = this.props;
        let cleanValue = value == null ? '' : value;

        if (type == 'select') {
            const {placeholder} = other;

            return (
                <div className="input">
                    <label>
                        <span className="input-label">{children}</span>
                    </label>

                    <Select className="input-field"
                            value={cleanValue}
                            onChange={this.handleOnChange}
                            {...other}>
                        {placeholder}
                    </Select>
                </div>
            )
        } else if (type == 'textarea') {
            const {rows} = other;

            return (
                <div className="input">
                    <label>
                        <span className="input-label">{children}</span>
                        <textarea className="input-field"
                                  rows={rows || 4}
                                  value={cleanValue}
                                  onChange={this.handleOnChange}
                                  {...other}/>
                    </label>
                </div>
            )
        } else if (type == 'date') {
            return (
                <div className="input">
                    <label>
                        <span className="input-label">{children}</span>
                        SUT DEN, LAV EN DATEPICKER DIN SO
                    </label>
                </div>
            )
        } else {
            if (addons) {
                return (
                    <div className="input">
                        <label>
                            <span className="input-label">{children}</span>
                            <span className="input-addons">
                                {this.renderLeftAddon(addons)}
                                <input className="input-field"
                                       type={type}
                                       value={cleanValue}
                                       onChange={this.handleOnChange}
                                       {...other}/>
                                {this.renderRightAddon(addons)}
                            </span>
                        </label>
                    </div>
                )
            } else {
                return (
                    <div className="input">
                        <label>
                            <span className="input-label">{children}</span>
                            <input className="input-field"
                                   type={type}
                                   value={cleanValue}
                                   onChange={this.handleOnChange}
                                   {...other}/>
                        </label>
                    </div>
                )
            }
        }
    }
}

export default Input;