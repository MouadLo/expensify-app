import { createStore } from 'redux';

// Action generators - function that return function Object

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementby = 1} = {}) => ({
    type: 'DECREMENT',
    decrementby
});

const setCount = ( { count = 1} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action



const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementby
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.count
            };
        default : 
            return state;
    }
}; 

const store =  createStore(countReducer);


const unsubscibe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 6
// });

//unsubscibe();

store.dispatch(incrementCount( { incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());


store.dispatch(decrementCount({ decrementby: 1000000 }));

// store.dispatch({
//     type: 'DECREMENT',
//     decrementby: 3
// });

store.dispatch(setCount({ count: 5 }))