import React from 'react';

import classes from './BudgetCategory.css';

const budgetCategory = (props) => {
    let category = null;

    switch(props.type) {
        case('income'):
            category = <div className={classes.Income}></div>;
            break;
        case('expense'):
            category = <div className={classes.Expense}></div>;
            break;
        default: 
            category = null;  
    }

    return category;
};

export default budgetCategory;