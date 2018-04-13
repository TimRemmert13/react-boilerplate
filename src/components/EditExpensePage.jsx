import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import {editExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = (e) => {
        this.props.startRemoveExpense({id: props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return(
            <div>
                <ExpenseForm 
                    expense={props.expense}
                    onSubmit={this.onSubmit}/>
            <button onClick={this.onRemove}>Remove</button>
        </div>
        );
    }
};
 
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);