import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Budget from '../../components/Budget/Budget';

class BudgetTracker extends Component {
    render() {
        return (
            <Aux>
                <Budget />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BudgetTracker;