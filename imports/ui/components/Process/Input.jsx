import React, {Component} from 'react';
import Select from '/imports/ui/components/Select.jsx';
import steps from '/imports/helpers/steps.js'

class ProcessInput extends Component {
    constructor(props) {
        super(props);

        const {value} = this.props;

        this.state = {
            list: value
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const {list} = this.state;
        list.push(Object.keys(steps)[0]);
        this.props.onChange(list);
    }

    handleSelect(index, event) {
        const {list} = this.state;
        list[index] = event.target.value;
        this.props.onChange(list);
    }

    handleRemove(index) {
        const {list} = this.state;
        list.splice(index, 1);
        this.props.onChange(list);
    }

    render() {
        const {children} = this.props;
        const {list} = this.state;

        return (
            <div className="input-process">
                <label>
                    <span className="input-label">{children}</span>
                </label>

                <table>
                    <tbody>
                        {list.map((value, index) => {
                            return (
                                <tr key={'step_' + index}>
                                    <td className="span">
                                        <Select value={value}
                                                options={steps}
                                                onChange={this.handleSelect.bind(this, index)}/>
                                    </td>

                                    <td className="shrink">
                                        <button type="button"
                                                onClick={this.handleRemove.bind(this, index)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button type="button" onClick={this.handleAdd}>Tilføj produktionstrin</button>
            </div>
        )
    }
}

export default ProcessInput;