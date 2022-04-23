import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { handleChange, placeHolder, className } = this.props;
    return (
      <input
        type="search"
        className={className}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    );
  }
}
