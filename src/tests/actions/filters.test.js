import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  } from '../../actions/filters';



test('Should generates set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});


test('Should generates set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should generates set sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
});

test('Should generates set sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
});

test('Should generates set text filter', () => {
    const action = setTextFilter('search');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'search'
    })
});
test('Should generates set text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});