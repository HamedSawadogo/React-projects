import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: props };
    console.log(this.state);
  }

  render() {
    return <div className="car-container">{this.props.data}</div>;
  }
}
export default Car;
