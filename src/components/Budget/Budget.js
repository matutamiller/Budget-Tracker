import React from 'react';
import classes from './Budget.css';
import BudgetCategory from './BudgetCategory/BudgetCategory';

const budget = (props) => {
    return (
        <div className={classes.Budget}>
            <BudgetCategory type="income"/>
            <BudgetCategory type="expense"/>
            <BudgetCategory type="income"/>
            <BudgetCategory type="expense"/>
            <BudgetCategory type="income"/> 
            <BudgetCategory type="expense"/>
            
        </div>
    );
};

export default budget;