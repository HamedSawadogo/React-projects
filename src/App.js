import React from "react";
import CartItems from "./components/CarItems";
import { carList } from "./assets/carsList";
import Navbar from "./components/Navbar";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CartItems data={carList} />
      </>
    );
  }
}

export default App;
