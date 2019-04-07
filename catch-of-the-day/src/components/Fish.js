import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return <li className="menu-fish">
      <img scr={image} alt={name} />
      <h3 className="fish-name">{name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable}>{isAvailable ? 'Add to order' : 'Sold out'}</button>
    </li>
  }
}

export default Fish;
