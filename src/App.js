import React, { Component } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar"
import TourList from "./Components/TourList/TourList";
import Tour from "./Components/Tour/Tour";

class App extends Component {
  render() {
   return(
   <React.Fragment>
      <NavBar></NavBar>
      <TourList></TourList>
    </React.Fragment>
    );
  }
}

export default App;
