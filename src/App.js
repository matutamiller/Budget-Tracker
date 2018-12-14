import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BudgetTracker from './containers/BudgetTracker/BudgetTracker';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BudgetTracker />
        </Layout>  
      </div>
    );
  }
}

export default App;
