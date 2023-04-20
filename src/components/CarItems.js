import React from "react";
import Car from "./Car";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cars">
        {this.props.data?.map((car, id) => (
          <Car data={car} key={id} />
        ))}
      </div>
    );
  }
}
export default CartItems;
