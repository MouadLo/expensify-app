import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    };

    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focusedInput) => {
        this.setState(() => ( { focusedInput}))
    };

    render() {
      return  (<div>
        <input 
            type="text"
            value={this.props.filters.text}
            onChange={(e) => {
                 console.log(e.target.value)
                this.props.dispatch(setTextFilter(e.target.value))
            }
        }/>
        <select 
            value={this.props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'amount'){
                    this.props.dispatch(sortByAmount()) 
                } else if (e.target.value === 'date'){
                    this.props.dispatch(sortByDate()) 
                }
             }
        }>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="fdsdfdsfsdf"
            startDateAriaLabel="Start Date"
            endDate={this.props.filters.endDate}
            endDateId="fdsdfdsfsdf"
            startDateAriaLabel="End Date"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            reopenPickerOnClearDates={true}
            showDefaultInputIcon={true}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
        />

    </div>)
    }
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);