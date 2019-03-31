import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import VisibleCards from './VisibleCards';
import NewCardModal from './NewCardModal';

class App extends Component {
  render() {
    return (
      <Router>
        <Toolbar />
        <div className="area">
          <Sidebar />
          <Route path="/deck/:deckId" component={VisibleCards}>
            {/* <Route path="/deck/:deckId/new" component={NewCardModal}/> */}
          </Route>
        </div>
      </Router>
    );
  }
}


export default App;
