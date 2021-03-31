import React from "react";
import bebopImg from "../../public/bebopImg.png";
import milleniumFalconImg from "../../public/milleniumFalconImg.png";
import serenityImg from "../../public/serenityImg.png";
import outlawStarImg from "../../public/outlawStarImg.png";

class ShipCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shipName = this.props.ship.model;
    const shipsObj = {
      1: bebopImg,
      2: milleniumFalconImg,
      3: serenityImg,
      4: outlawStarImg,
    };
    const index = this.props.ship.id;
    return (
      <div>
        <div>{this.props.ship.model}</div>
        <img src={shipsObj[index] || null} />
        <div>${this.props.ship.price}.00</div>
        <div>{this.props.ship.description}</div>
        <button>Buy Now</button>
      </div>
    );
  }
}
export default ShipCarouselItem;
