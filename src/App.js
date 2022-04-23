import { Component } from "react";
import "./App.css";

// local imports
import Card from "./components/card/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {}
  handleChange(e) {
    const searchField = e.target.value;
    this.setState(() => {
      return { searchField };
    });
  }

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
    const { monsters, searchField } = this.state;
    const regexp = new RegExp(searchField, "gi");
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.match(regexp)
    );
    return (
      <div className="App">
        <Card />
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={this.handleChange}
        />
        <h1>
          {filteredMonsters.map((monster) => {
            return <p key={monster.id}>{monster.name}</p>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
