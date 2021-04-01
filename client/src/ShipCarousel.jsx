import React from "react";
import ShipCarouselItem from "./ShipCarouselItem.jsx";

class ShipCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed: [],
    };
  }
  render() {
    return (
      <div>
        {this.props.ships.map((ship, index) => (
          <ShipCarouselItem
            key={index}
            ship={ship}
            OnHandleAddToCart={this.props.OnHandleAddToCart}
          />
        ))}
      </div>
    );
  }
}
export default ShipCarousel;
