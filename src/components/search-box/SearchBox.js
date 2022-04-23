import { Component } from "react";

import "./Search-box.css";

export default class SearchBox extends Component {
  render() {
    const { handleChange, placeHolder, className } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    );
  }
}
