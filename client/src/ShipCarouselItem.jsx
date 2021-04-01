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
    const { OnHandleAddToCart, ship } = this.props;
    const shipName = ship.model;
    let shipsObj = {
      4: bebopImg,
      14: milleniumFalconImg,
      24: outlawStarImg,
      34: serenityImg,
    };
    const index = ship.id;
    return (
      <div>
        <div>{ship.model}</div>
        <img src={shipsObj[index] || null} />
        <div>${ship.price}.00</div>
        <div>{ship.description}</div>
        <button
          onClick={() => {
            OnHandleAddToCart(shipName);
          }}
        >
          Buy Now
        </button>
      </div>
    );
  }
}
export default ShipCarouselItem;
