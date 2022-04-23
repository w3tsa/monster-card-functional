import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  async componentDidMount() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      this.setState(() => {
        return { monsters: users };
      });
    } catch (error) {
      console.error("error", error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.monsters.map((monster) => {
            return <p key={monster.id}>{monster.name}</p>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
