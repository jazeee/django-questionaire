import React from 'react';
import PollRoutes from "./polls/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PollRoutes />
      </div>
    </Router>
  );
}

export default App;
