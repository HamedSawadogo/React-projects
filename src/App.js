import React from "react";
import CartItems from "./components/CarItems";
import { carList } from "./assets/carsList";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
class App extends React.Component {
  componentDidMount() {
    console.log("==========Composant Monté ===========");
  }
  componentWillUnmount() {}
  componentDidUpdate() {}
  componentDidCatch() {
    console.error("=========une erreur est survenu! ");
  }
  render() {
    console.log("==========Composant Render==========");
    return (
      <>
        <Provider store={store}>
          <Navbar />
          <CartItems data={carList} />
        </Provider>
      </>
    );
  }
}

export default App;
