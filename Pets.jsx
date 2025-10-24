import React, { useState } from "react";
import "./Pets.css";

const PetCard = ({ type, petDetails }) => {
  const {
    name,
    price,
    priceRange,
    location,
    image,
    description,
    breed,
    color,
    petType,
    age,
    vaccinated,
  } = petDetails;

  const isSeller = type === "seller";

  return (
    <div className={`pet-card ${isSeller ? "seller" : "buyer"}`}>
      {isSeller && image && (
        <div className="card-image-container">
          <img src={image} alt={name || "Pet"} className="card-image" />
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <h2>{isSeller ? name : petType}</h2>
          <span className="price-tag">
            {isSeller
              ? `PKR ${price}`
              : `PKR ${priceRange?.min} - ${priceRange?.max}`}
          </span>
        </div>
        <p className="pet-subtext"><strong>PET: </strong>{petType}</p>
        {breed && <p><strong>Breed:</strong> {breed}</p>}

        <p><strong>Location:</strong> {location}</p>

        <div className="card-actions">
          <button className="btn view-details">View Details</button>
        </div>
      </div>
    </div>
  );
};

const Pets = () => {
  const [sellerPets] = useState([
    {
      name: "Max",
      price: "8000",
      location: "Karachi",
      image: "https://placedog.net/500/280?id=1",
      breed: "Labrador",
      color: "Golden",
      description: "Friendly and playful, loves to run.",
      petType: "Dog",
      age: "2 years",
      vaccinated: true,
    },
    {
      name: "Bella",
      price: "5000",
      location: "Lahore",
      image: "https://placedog.net/500/280?id=2",
      breed: "Poodle",
      color: "White",
      description: "A cute and affectionate little companion.",
      petType: "Dog",
      age: "1 year",
      vaccinated: true,
    },
    {
      name: "Bella",
      price: "5000",
      location: "Lahore",
      image: "https://placedog.net/500/280?id=2",
      breed: "Poodle",
      color: "White",
      description: "A cute and affectionate little companion.",
      petType: "Dog",
      age: "1 year",
      vaccinated: true,
    },
    
  ]);

  const [buyerPreferences] = useState([
    {
      location: "Islamabad",
      breed: "Persian",
      color: "White",
      priceRange: { min: 2000, max: 4000 },
      petType: "Cat",
      description: "Prefer a friendly and calm indoor cat.",
    },
    {
      location: "Karachi",
      breed: "Labrador",
      color: "Golden",
      priceRange: { min: 5000, max: 9000 },
      petType: "Dog",
      description: "Looking for an active puppy, good with kids.",
    },
  ]);

  const [filters, setFilters] = useState({
    petType: "",
    breed: "",
    location: "",
    priceRange: { min: "", max: "" },
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "min" || name === "max") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: {
          ...prevFilters.priceRange,
          [name]: value,
        },
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleResetFilters = () => {
    setFilters({
      location: "",
      breed: "",
      priceRange: { min: "", max: "" },
      petType: "",
    });
  };

  const filteredSellerPets = sellerPets.filter((pet) => {
    const { location, breed, price, petType } = pet;
    const { location: filterLocation, breed: filterBreed, priceRange, petType: filterPetType } = filters;
    return (
      (filterLocation ? location.toLowerCase().includes(filterLocation.toLowerCase()) : true) &&
      (filterBreed ? breed.toLowerCase().includes(filterBreed.toLowerCase()) : true) &&
      (price >= (priceRange.min || 0) && price <= (priceRange.max || Number.MAX_VALUE)) &&
      (filterPetType ? petType.toLowerCase().includes(filterPetType.toLowerCase()) : true)
    );
  });

  const filteredBuyerPreferences = buyerPreferences.filter((preference) => {
    const { location, breed, priceRange, petType } = preference;
    const { location: filterLocation, breed: filterBreed, priceRange: filterPriceRange, petType: filterPetType } = filters;
    return (
      (filterLocation ? location.toLowerCase().includes(filterLocation.toLowerCase()) : true) &&
      (filterBreed ? breed.toLowerCase().includes(filterBreed.toLowerCase()) : true) &&
      (priceRange.min >= (filterPriceRange.min || 0) && priceRange.max <= (filterPriceRange.max || Number.MAX_VALUE)) &&
      (filterPetType ? petType.toLowerCase().includes(filterPetType.toLowerCase()) : true)
    );
  });

  return (
    <div className="pets-container">
      <div className="heading">
        <h1>Pets for Sale</h1>
      </div>
      <div className="filters">
        <input
          type="text"
          name="petType"
          placeholder="Search by pet type"
          value={filters.petType}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Search by breed"
          value={filters.breed}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <div className="price-range">
          <input
            type="number"
            name="min"
            placeholder="Min price"
            value={filters.priceRange.min}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="max"
            placeholder="Max price"
            value={filters.priceRange.max}
            onChange={handleFilterChange}
          />
        </div>
        <button className="btn reset-btn" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="pet-cards">
        {filteredSellerPets.map((pet, index) => (
          <PetCard key={index} type="seller" petDetails={pet} />
        ))}
      </div>

      <div className="heading" style={{ marginTop: "80px" }}>
        <h1>Looking for a Pet?</h1>
      </div>
      <div className="pet-cards">
        {filteredBuyerPreferences.map((pet, index) => (
          <PetCard key={index} type="buyer" petDetails={pet} />
        ))}
      </div>
    </div>
  );
};

export default Pets;
