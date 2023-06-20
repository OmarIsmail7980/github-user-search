import { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import { useProfile } from "../../context/ProfileContext";
import "./Search.css";

const Search = () => {
  const { setProfile, setNotFound, notFound } = useProfile();
  `https://api.github.com/users/:username`;
  const [user, setUser] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
      }).then((response) => response.json());

      if (response.created_at) {
        setNotFound(false);
        setProfile(response);
        setUser("");
      } else {
        setNotFound(true);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section className="search">
      <img className="search__icon" src={searchIcon} alt="search" />
      <input
        className="search__input"
        type="text"
        value={user}
        placeholder="Search GitHub username…"
        onChange={(event) => setUser(event.target.value)}
      />
      {notFound && <p>No results</p>}
      <button className="search__btn" type="submit" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default Search;
