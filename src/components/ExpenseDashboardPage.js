import React from 'react';
import ExpensesList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <p>This is my dashboard page</p>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage; 