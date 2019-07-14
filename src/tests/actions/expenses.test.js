import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

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


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore();
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
  });

test('should setup add expense action object', () => {
   
    const action = addExpense( expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})