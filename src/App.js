import { Component } from "react";
import "./App.css";

// local imports
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

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
        <h1 className="app-title">Monster Card</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeHolder={"Search Monster"}
          className={"monsters-search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
