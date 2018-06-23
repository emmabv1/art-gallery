import React, { Component } from "react";
import Painting from "./components/Painting";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import paintings from "./paintings.json";
import "./App.css";

class App extends Component {

  state = {
    paintings,
    click: ""
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

  shuffle = () => {
    const picture = this.shuffleArray(this.state.paintings);
    this.setState({paintings:picture});
  };

  componentDidMount() {
    this.shuffle();
  }

  render() {
    return (
      <Wrapper>
        <Title>Art Gallery</Title>
        {this.state.paintings.map(painting => (
          <Painting
            //shuffle={painting.shuffle}
            id={painting.id}
            key={painting.id}
            name={painting.name}
            image={painting.image}
            artist={painting.artist}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
