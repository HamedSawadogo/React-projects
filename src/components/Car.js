import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="car-container">
        <img src={this.props.data.url} alt="" />
        <h3>{this.props.data.name}</h3>
        <strong>Réalisé en {this.props.data.release_year}</strong>
      </div>
    );
  }
}
export default Car;
