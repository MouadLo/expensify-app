import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense,  startRemoveExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
           Editing the expense with id of {props.match.params.id}
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense)
                    props.dispatch(startEditExpense(props.match.params.id,expense))
                    props.history.push('/'); 
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.match.params.id }));
                props.history.push('/'); 
            }}>Remove</button>    
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    };
};

export default connect(mapStateToProps)(EditExpensePage);
