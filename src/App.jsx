import './App.css';

import Budgets from './features/Budgets/Budgets';
import Transactions from './features/Transactions/Transactions';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <h1> Expense Tracker </h1>
        <Budgets />
        <Transactions /> 
      </header>
    </div>
  )
}

export default App
