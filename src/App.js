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

// export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;