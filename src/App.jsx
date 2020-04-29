import React from "react";
import Home from "./components/home";
import { BrowserRouter, Route } from "react-router-dom";
import "./resources/styles.css";
import Context from "./context/Context";
import Details from "./components/details";
const App = () => {
  document.body.classList.remove('overflow-hidden')
  document.body.style.overflow = `visible`
  return (
    <Context>
      <BrowserRouter>
        <div className="App">
            <Route path="/" component={Home} />
            <Route path="/projects/:project" component={Details} />
        </div>
      </BrowserRouter>
    </Context>
  );
};
export default App;
