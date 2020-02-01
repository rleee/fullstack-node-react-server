import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header/Header";
const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>Survey</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={Survey} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
