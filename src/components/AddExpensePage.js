import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <p>Create Expenses</p>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}


export default connect()(AddExpensePage);