import { useState } from "react";
import SearchModal from "./SearchModal";
import data from "./cars.json";

function Search({ onSearch, onClear }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCars, setAllCars] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    const filteredResults = allCars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setIsModalOpen(true);
  };

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Cars in Garage"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>
          Clear Search
        </button>
      </form>
      <SearchModal
        isOpen={isModalOpen}
        searchResults={searchResults}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Search;
