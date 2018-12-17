import React from 'react';
import classes from './Budget.css';
import BudgetCategory from './BudgetCategory/BudgetCategory';

const budget = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.IncomeTotal}>Income: 2000</div>
            <div className={classes.ExpenseTotal}>Expence: 1000</div>
            <div className={classes.Budget}>
                <BudgetCategory type="income"/>
                <BudgetCategory type="expense"/>
            </div>
            <div>Balance: 1000</div>
        </div>
    );
};

export default budget;