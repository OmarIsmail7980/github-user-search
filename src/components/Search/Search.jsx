import searchIcon from "../../assets/icon-search.svg";
import "./Search.css";

const Search = () => {
  return (
    <section className="search">
      <img className="search__icon" src={searchIcon} alt="search" />
      <input
        className="search__input"
        type="text"
        placeholder="Search GitHub username…"
      />
      <p>No results</p>
      <button className="search__btn" type="submit">
        Search
      </button>
    </section>
  );
};

export default Search;
