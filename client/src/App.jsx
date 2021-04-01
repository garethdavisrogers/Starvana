import React from "react";
import ShipCarousel from "./ShipCarousel.jsx";
import axios from "axios";
import { GiStarfighter } from "react-icons/gi";
import Cart from "./myCart.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ships: [],
      inCart: [],
      checkout: false,
    };

    this.getCurrentShips = this.getCurrentShips.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(ship) {
    let currentCart = this.state.inCart;
    let addedCart = currentCart.push(ship);
    this.setState({ inCart: addedCart, checkout: true });
  }

  componentDidMount() {
    this.getCurrentShips();
  }

  getCurrentShips() {
    axios
      .get("/ships")
      .then((response) => {
        this.setState({ ships: response.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { inCart } = this.state;
    return (
      <div>
        <div id="page-header">
          <GiStarfighter size={150} /> Welcome to Starvana: The online spaceship
          shop
        </div>
        <ShipCarousel
          ships={this.state.ships}
          OnHandleAddToCart={this.handleAddToCart}
        />
        <Cart inCart={inCart} />
      </div>
    );
  }
}
export default App;
