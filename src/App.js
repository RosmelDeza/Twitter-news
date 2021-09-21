import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Entertainment from "./pages/Entertainment";
import Sport from "./pages/Sport";
import Cusco from "./pages/Cusco";
import Health from "./pages/Health";
import Economy from "./pages/Economy";
import Politics from "./pages/Politics";
import Shows from "./pages/Shows";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/entretenimiento" component={Entertainment} />
        <Route path="/deporte" component={Sport} />
        <Route path="/cusco" component={Cusco} />
        <Route path="/salud" component={Health} />
        <Route path="/economia" component={Economy} />
        <Route path="/politica" component={Politics} />
        <Route path="/espectaculos" component={Shows} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
