// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import RegisterForm from './components/RegisterForm';
// import Dashboard from './components/Dashboard';
// import BillingOperations from './components/BillingOperations';
// import Receipt from './components/Receipt';

// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <header>
//           <h1>E-Wallet App</h1>
//         </header>
//         <nav>
//           <a href="/register">Register</a>
//           <a href="/dashboard">Dashboard</a>
//           <a href="/billing">Billing</a>
//           <a href="/receipt">Receipt</a>
//         </nav>
//         <Switch>
//           <Route path="/register" component={RegisterForm} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/billing" component={BillingOperations} />
//           <Route path="/receipt" component={Receipt} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App

import React from 'react'
import BillingOperations from './components/BillingOperations'
import Transaction from './components/Transaction'


const App = () => {
  return (
    <><Transaction /></>
  )
}

export default App


