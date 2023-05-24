import Modal from "react-modal";
import "./search.css";

function SearchModal({ isOpen, searchResults, closeModal }) {
  const customStyles = {
    content: {
      backgroundColor: "lightgray",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Search Results"
    >
      <h2>Search Result</h2>
      <div className="search-results">
        {searchResults.map((car) => (
          <div key={car.name}>
            <img src={car.image} alt={car.name} className="car-card-image" />
            <h2 className="car-card-name">{car.name}</h2>
            <p className="car-card-info">{car.info}</p>
            <p className="car-card-price">{car.price} SEK</p>
          </div>
        ))}
      </div>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default SearchModal;
