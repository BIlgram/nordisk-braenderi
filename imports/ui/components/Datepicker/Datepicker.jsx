import React, {Component} from 'react';
import moment from 'moment';

class Datepicker extends Component {
    constructor(props) {
        super(props);

        const {value} = this.props;

        this.state = {
            value: value || new Date()
        };

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleInputBlur, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleInputBlur, false);
    }

    handleInputFocus() {
        this.setState({open: true})
    }

    handleInputBlur(event) {
        if (!event.target.classList.contains('datepicker-input'))
            this.setState({open: false})
    }

    handleSelectClick(dateObj) {
        if (dateObj.isInMonth) {
            this.setState({value: dateObj.date.toDate(), open: false});
            this.props.onChange(dateObj.date.toDate());
        }
    }

    getDates(month) {
        let dates = [];

        let showing = {
            start: moment().month(month).date(1),
            end: moment().month(month).endOf('month')
        };

        let addDate = date => {
            let obj = {date: date};
            obj.isInMonth = showing.start.month() == date.month();
            obj.isWeekend = date.weekday() == 5 || date.weekday() == 6;
            dates.push(obj);
        };

        for (let i = showing.start.weekday(); i > 0; i--) {
            addDate(showing.start.clone().subtract(i, 'days'));
        }

        for (let i = 1; i <= showing.end.date(); i++) {
            addDate(showing.start.clone().date(i));
        }

        for (let i = 1; i <= 6 - showing.end.weekday(); i++) {
            addDate(showing.end.clone().add(i, 'days'));
        }

        return dates;
    }

    renderPicker() {
        const {open} = this.state;
        const dates = this.getDates(11);

        if (open) {
            return (
                <div className="picker">
                    <div className="weekdays">
                        {moment.weekdaysShort(true).map((day, index) => {
                            return <div className="weekday" key={'weekday_' + index}>{day}</div>
                        })}
                    </div>

                    <div className="dates">
                        {dates.map((date, index) => {
                            let classes = ['date'];

                            if (date.isInMonth)
                                classes.push('in-month');
                            if (date.isWeekend)
                                classes.push('weekend');

                            return (
                                <div className={classes.join(' ')}
                                     key={'date_' + index}
                                     onClick={this.handleSelectClick.bind(this, date)}>
                                    {date.date.date()}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

        return null;
    }

    render() {
        const {value} = this.state;

        return (
            <div className="datepicker">
                <input className="datepicker-input"
                       type="text"
                       readOnly="readOnly"
                       value={moment(value).format('DD-MM-YYYY')}
                       onFocus={this.handleInputFocus}/>
                {this.renderPicker()}
            </div>
        )
    }
}

export default Datepicker;