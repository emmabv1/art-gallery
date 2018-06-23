import React, { Component } from "react";
import "./Painting.css";

class  Painting extends Component {

  
  state = {
    pic: this.props.image
  };

  /*
  flip = (num) => {
    const otherpic = this.props.image;
    //console.log("clicky");
    num = this.props.id;
    //console.log(this.props.id)
    this.setState({pic:otherpic});
  };*/

  render() {
    return(
    <div className="card">
    <div className="img-container" onClick={()=>{this.props.game(this.props.index)}}>
      <img alt={this.props.name} src={this.props.img1 === this.props.index || this.props.img2 === this.props.index  || this.props.correct.includes(this.props.id)? this.props.image: "https://cdn.pixabay.com/photo/2016/06/27/14/57/palette-1482678_1280.png"} />
    </div>
  </div>
    )}
  
}

export default Painting;
