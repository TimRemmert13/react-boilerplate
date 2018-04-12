import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from'./store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.dispatch(addExpense({description: 'Waterbill', amount: 4500})));
console.log(store.dispatch(addExpense({description: 'Gasbill', createdAt: 1000})));
console.log(store.dispatch(addExpense({description: 'Waterbill', amount: 19500})));
console.log(store.dispatch(setTextFilter('water')));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



