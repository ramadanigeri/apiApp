import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/todo/:id" element={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
