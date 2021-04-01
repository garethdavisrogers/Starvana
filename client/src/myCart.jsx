import React from "react";
import CartItem from "./CartItem.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.inCart = this.props.inCart;
  }
  render() {
    return (
      <div>
        {this.inCart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    );
  }
}

export default Cart;
