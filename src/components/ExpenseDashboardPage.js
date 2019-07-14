import React from 'react';
import ExpensesList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <p>This is my dashboard page</p>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage; 