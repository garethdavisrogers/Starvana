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
          <ShipCarouselItem key={index} ship={ship} />
        ))}
      </div>
    );
  }
}
export default ShipCarousel;
