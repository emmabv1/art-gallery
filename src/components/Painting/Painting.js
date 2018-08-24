import React, { Component } from "react";
import "./Painting.css";

class  Painting extends Component {

  render() {
    let flippy = this.props.index;
    let front = this.props.image;
    let back = "https://purepng.com/public/uploads/large/purepng.com-paint-paletteobjectpaintpaintingbrushcolorpaletteobjectspaint-palette-6315223254414bcq8.png";
    return(
      <div className="card">
      <div className="img-container" onClick={()=>{this.props.game(flippy)}}>
        <img alt={this.props.name} src={this.props.img1 === flippy || this.props.img2 === flippy  || this.props.correct.includes(this.props.id)? front:back} />
      </div>
      </div>
    );
  }
}

export default Painting;
