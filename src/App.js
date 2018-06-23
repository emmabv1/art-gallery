import React, { Component } from "react";
import Painting from "./components/Painting";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import paintings from "./paintings.json";
import "./App.css";

class App extends Component {

  state = {
    paintings,
    click: 0,
    img1: -1,
    img2: -1,
    correct: []
  };

  shuffleArray(array) {
    let duplicated = array.map(function(item){return [item, item];}).reduce(function(a, b) {return a.concat(b)});
    for (var i = duplicated.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = duplicated[i];
      duplicated[i] = duplicated[j];
      duplicated[j] = temp;
    }
    return duplicated;  
  };

  game = (index) => {
    if(this.state.click === 0){
      this.setState({click:1})
      this.setState({img1:index},function(){
        console.log(this.state.paintings[this.state.img1].name);
      });
    }
    else{
      this.setState({click:0})
      this.setState({img2:index}, function(){
        console.log(this.state.paintings[this.state.img2].name);
        if (this.state.paintings[this.state.img1].name === this.state.paintings[this.state.img2].name) {
          console.log("same");
          let correct = this.state.correct;
          correct.push(this.state.paintings[this.state.img1].id)
          this.setState({img1: -1, img2:-1, correct:correct});
        }
        else {
          console.log("not the same");
          setTimeout(()=>{this.setState({img1: -1, img2:-1})}, 800);
        }

      });

      
    }

    /*
    this.setState({img:index}, function(){
      console.log(this.state.paintings[this.state.img].name);
    })*/
    
  }

  shuffle = () => {
    const picture = this.shuffleArray(this.state.paintings);
    this.setState({paintings:picture});
  };

  componentDidMount() {
    this.shuffle();
  }

  render() {
    //console.log(this.state.paintings)
    //console.log(this.state.img)
    return (
      <Wrapper>
        <Title>Art Gallery</Title>
        {this.state.paintings.map((painting, i) => (
          <Painting
            shuffle={painting.shuffle}
            game={this.game}
            id={painting.id}
            key={i}
            index={i}
            name={painting.name}
            image={painting.image}
            artist={painting.artist}
            img1={this.state.img1}
            img2={this.state.img2}
            correct={this.state.correct}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
