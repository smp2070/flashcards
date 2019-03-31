import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import VisibleCards from './VisibleCards';

class App extends Component {
  render() {
    return (
      <Router>
        <Toolbar />
        <div className="area">
          <Sidebar />
          <Route path="/deck/:deckId" component={VisibleCards} />
        </div>
      </Router>
    );
  }
}


export default App;
