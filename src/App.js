import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search/search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serachString: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

    const makereq = async () => {
      console.log(await fetch("https://jsonplaceholder.typicode.com/users"));
      console.log("Here");
    };
    //makereq();
  }

  handleChange = e => {
    this.setState({ serachString: e.target.value });
  };
  render() {
    const { monsters, serachString } = this.state;
    const filteredMomsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(serachString.toLowerCase())
    );

    return (
      <div className="App">
        <h1>MOnster Panther !! </h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMomsters} />
      </div>
    );
  }
}

export default App;
