import "./Search-box.css";

function SearchBox({ handleChange, placeHolder, className }) {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
}

// export default class SearchBox extends Component {
//   render() {
//     const { handleChange, placeHolder, className } = this.props;
//     return (
//       <input
//         type="search"
//         className={`search-box ${className}`}
//         placeholder={placeHolder}
//         onChange={handleChange}
//       />
//     );
//   }
// }

export default SearchBox;
