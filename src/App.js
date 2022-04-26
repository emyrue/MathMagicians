import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/calculator"> Calculator </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator previous="" operand="" current="0" solved={false} />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
