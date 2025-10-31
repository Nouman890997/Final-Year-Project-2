import React, { useEffect, useState } from 'react';
import './Veterinarian.css';
import defaultImage from '../assets/image.jpg';

const Veterinarian = () => {
  const [veterinarians, setVeterinarians] = useState([]);
  const [search, setSearch] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [availability, setAvailability] = useState('');
  const [petExpertise, setPetExpertise] = useState('');

  const dummyData = [
    {
      name: "Dr. Jane Smith",
      specialization: "Veterinary Surgeon",
      bio: "Passionate about helping animals recover and thrive.",
      image: defaultImage,
      location: "Karachi, Pakistan",
      availability: "clinic",
      petExpertise: ['Dogs', 'Cats']
    },
    {
      name: "Dr. Mark Taylor",
      specialization: "Exotic Animal Specialist",
      bio: "Loves treating birds, reptiles, and small mammals.",
      image: defaultImage,
      location: "Islamabad, Pakistan",
      availability: "home",
      petExpertise: ['Birds', 'Reptiles', 'Small Mammals']
    },
    {
      name: "Dr. Olivia Brown",
      specialization: "Small Animal Specialist",
      bio: "Expert in dogs, cats, and other household pets.",
      image: defaultImage,
      location: "Lahore, Pakistan",
      availability: "both",
      petExpertise: ['Dogs', 'Cats', 'Rabbits']
    },
  ];

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await fetch('/api/veterinarians');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const vetsWithFallback = data.map(vet => ({
            ...vet,
            image: vet.image || defaultImage,
            location: vet.location || 'Location not specified',
            availability: vet.availability || 'Not specified',
            petExpertise: vet.petExpertise || ['Not specified'],
          }));
          setVeterinarians(vetsWithFallback);
        } else {
          setVeterinarians(dummyData);
        }
      } catch (error) {
        console.error('Error fetching veterinarians:', error);
        setVeterinarians(dummyData);
      }
    };

    fetchVeterinarians();
  }, []);

  const resetFilters = () => {
    setSearch('');
    setSpecialization('');
    setAvailability('');
    setPetExpertise('');
  };

  const filteredVeterinarians = veterinarians.filter(vet => {
    return (
      vet.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization ? vet.specialization === specialization : true) &&
      (availability ? vet.availability === availability : true) &&
      (petExpertise ? vet.petExpertise.includes(petExpertise) : true)
    );
  });

  return (
    <div className="veterinarian-container">
      <h1 className="section-title">VETERINARIANS</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={specialization} onChange={e => setSpecialization(e.target.value)}>
          <option value="">All Specializations</option>
          <option value="Veterinary Surgeon">Veterinary Surgeon</option>
          <option value="Exotic Animal Specialist">Exotic Animal Specialist</option>
          <option value="Small Animal Specialist">Small Animal Specialist</option>
        </select>
        <select value={availability} onChange={e => setAvailability(e.target.value)}>
          <option value="">All Availability</option>
          <option value="clinic">Clinic Visit Only</option>
          <option value="home">Home Visit Only</option>
          <option value="both">Home & Clinic Visits</option>
        </select>
        <select value={petExpertise} onChange={e => setPetExpertise(e.target.value)}>
          <option value="">All Pets</option>
          <option value="Dogs">Dogs</option>
          <option value="Cats">Cats</option>
          <option value="Birds">Birds</option>
          <option value="Reptiles">Reptiles</option>
          <option value="Small Mammals">Small Mammals</option>
          <option value="Rabbits">Rabbits</option>
        </select>
        <button className="reset-btn" onClick={resetFilters}>Reset</button>
      </div>

      <div className="card-grid">
        {filteredVeterinarians.length ? (
          filteredVeterinarians.map((vet, index) => (
            <div key={index} className="card">
              <img src={vet.image} alt={vet.name} />
              <div className="card-content">
                <h2>{vet.name}</h2>
                <h3>{vet.specialization}</h3>
                <p>{vet.bio}</p>
                <p className="location"><strong>Location:</strong> {vet.location}</p>
                <p className="availability"><strong>Availability:</strong> {vet.availability}</p>
                <p className="expertise"><strong>Expertise:</strong> {vet.petExpertise.join(', ')}</p>
                <button className="hire-button">Hire Vet</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No results" />
            <p>No Veterinarian Found. Try changing the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Veterinarian;








