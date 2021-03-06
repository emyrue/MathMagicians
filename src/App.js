import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import CalcPage from './pages/calcpage';
import Quote from './pages/quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <h1>Math Magicians</h1>
          <nav>
            <Link className="link" to="/"> Home </Link>
            <span> | </span>
            <Link className="link" to="/calculator"> Calculator </Link>
            <span> | </span>
            <Link className="link" to="/quote"> Quote </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalcPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
