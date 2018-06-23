import React, { Component } from "react";
import "./Painting.css";

class  Painting extends Component {

  state = {
    pic: "https://cdn.pixabay.com/photo/2016/06/27/14/57/palette-1482678_1280.png"
  };

  flip = () => {
    const otherpic = this.props.image;
    this.setState({pic:otherpic});
  };

  render() {
    return(
    <div className="card">
    <div className="img-container" onClick={this.flip}>
      <img alt={this.props.name} src={this.state.pic} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {this.props.name}
        </li>
        <li>
          <strong>Artist:</strong> {this.props.artist}
        </li>
      </ul>
    </div>
  </div>
    )}
  
}

export default Painting;
