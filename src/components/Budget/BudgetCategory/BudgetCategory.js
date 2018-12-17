import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BudgetCategory.css';

class BudgetCategory extends Component {
    render() {
        let category = null;

    switch(this.props.type) {
        case('income'):
            category = <div className={classes.Income}>Salary</div>;
            break;
        case('expense'):
            category = <div className={classes.Expense}>Rent</div>;
            break;
        default: 
            category = null;  
        }

        return category;
    }
}

BudgetCategory.propTypes = {
    type: PropTypes.string.isRequired
};

export default BudgetCategory;