import React from "react";
import ShipCarousel from "./ShipCarousel.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ships: [],
    };

    this.getCurrentShips = this.getCurrentShips.bind(this);
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
    return (
      <div>
        <div>Welcome to Starvana: The online spaceship shop</div>
        <ShipCarousel ships={this.state.ships} />
      </div>
    );
  }
}
export default App;
