import React, { useState } from 'react';
import './Feed.css';

const feedsData = [
  {
    id: 1,
    name: 'Premium Chicken Feed',
    type: 'Dry',
    pet: 'Dog',
    price: 1200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqFEYtplT5IjmU0zAuFXlZDHqB2b5EnGvrw&s',
    description: 'High protein feed for active dogs.',
  },
  {
    id: 2,
    name: 'Fish Delight',
    type: 'Wet',
    pet: 'Cat',
    price: 950,
    image: '',
    description: 'Omega-rich wet food for cats.',
  },
  {
    id: 3,
    name: 'Organic Bird Mix',
    type: 'Dry',
    pet: 'Bird',
    price: 600,
    image: '',
    description: 'Nutritious seeds and grains for birds.',
  },
  {
    id: 4,
    name: 'Lamb & Rice Feast',
    type: 'Dry',
    pet: 'Dog',
    price: 1400,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCqJIw3iT66rfA1oKKEg2QDkd-Il8cIJnsw&s',
    description: 'Balanced meal for adult dogs.',
  },
  {
    id: 5,
    name: 'Tuna Supreme',
    type: 'Wet',
    pet: 'Cat',
    price: 1100,
    image: 'https://via.placeholder.com/300x200?text=Tuna+Cat+Food',
    description: 'Delicious tuna chunks in gravy.',
  },
  {
    id: 6,
    name: 'Puppy Starter Feed',
    type: 'Dry',
    pet: 'Dog',
    price: 1000,
    image: 'https://via.placeholder.com/300x200?text=Puppy+Feed',
    description: 'Specially formulated for puppies.',
  },
  {
    id: 7,
    name: 'Parrot Treat Blend',
    type: 'Dry',
    pet: 'Bird',
    price: 850,
    image: 'https://via.placeholder.com/300x200?text=Parrot+Treats',
    description: 'Vitamin-rich treats for parrots.',
  },
  {
    id: 8,
    name: 'Beefy Bites',
    type: 'Wet',
    pet: 'Dog',
    price: 1300,
    image: 'https://via.placeholder.com/300x200?text=Beef+Dog+Food',
    description: 'Wet food with chunks of beef.',
  },
  {
    id: 9,
    name: 'Kitten Growth Pack',
    type: 'Dry',
    pet: 'Cat',
    price: 1050,
    image: 'https://via.placeholder.com/300x200?text=Kitten+Feed',
    description: 'Supports healthy growth for kittens.',
  },
  {
    id: 10,
    name: 'FeatherCare Premium',
    type: 'Wet',
    pet: 'Bird',
    price: 700,
    image: 'https://via.placeholder.com/300x200?text=FeatherCare',
    description: 'Soft food for exotic birds with vitamins.',
  },
];

const FeedComponent = () => {
  const [search, setSearch] = useState('');
  const [feedType, setFeedType] = useState('');
  const [type, setType] = useState('');
  const [pet, setPet] = useState('');

  const resetFilters = () => {
    setSearch('');
    setFeedType('');
    setType('');
    setPet('');
  };

  const filteredFeeds = feedsData.filter(feed => {
    return (
      feed.name.toLowerCase().includes(search.toLowerCase()) &&
      (feedType ? feed.name === feedType : true) &&
      (type ? feed.type === type : true) &&
      (pet ? feed.pet === pet : true)
    );
  });

  return (
    <div className="feed-container">
      <h1 className="section-title">PETS FEED</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={feedType} onChange={e => setFeedType(e.target.value)}>
          <option value="">All Feeds</option>
          {feedsData.map(feed => (
            <option key={feed.id} value={feed.name}>
              {feed.name}
            </option>
          ))}
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Dry">Dry</option>
          <option value="Wet">Wet</option>
        </select>
        <select value={pet} onChange={e => setPet(e.target.value)}>
          <option value="">All Pets</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
        </select>
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="card-grid">
        {filteredFeeds.length ? (
          filteredFeeds.map(feed => (
            <div className="feed-card" key={feed.id}>
              <img src={feed.image} alt={feed.name} className="feed-card-image" />
              <div className="card-content">
                <div className="feed-name">
                  <h2>{feed.name}</h2>
                </div>
                <div className="feed-description">
                  <p>{feed.description}</p>
                </div>
                <div className="feed-type">
                  <strong>Type: </strong> <span>{feed.type} Feed</span>
                </div>
                <div className="feed-pet">
                <strong>For: </strong> <span>{feed.pet}</span>
                </div>
                <div className="feed-price">
                  <strong>PKR {feed.price}</strong>
                </div>
                <div className="order-btn-container">
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No results" />
            <p>No Feed Found. Try changing the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedComponent;









