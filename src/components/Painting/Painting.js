import React, { Component } from "react";
import "./Painting.css";

class  Painting extends Component {

  render() {
    let flippy = this.props.index;
    let front = this.props.image;
    let back = "https://cdn.pixabay.com/photo/2016/06/27/14/57/palette-1482678_1280.png";
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
