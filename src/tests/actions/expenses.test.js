import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup remove expense action object',() => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( { note: 'new note value'}, '123abc')
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'new note value'
        },
        id: '123abc'
    })
})


test('should setup default add expense action object', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description : '',
            note : '',
            amount: 0,
            createdAt : 0
        }
    })
})

test('should setup add expense action object', () => {
   
    const action = addExpense( expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})