import { Component } from "react";

class Card extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <h1>
        {monsters.map((monster) => {
          return <p key={monster.id}>{monster.name}</p>;
        })}
      </h1>
    );
  }
}

export default Card;
