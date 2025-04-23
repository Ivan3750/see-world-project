import React, { useState } from "react";
import "./ogolosh.css";
import img1 from "./images/Welcomehotel.png"
import img2 from "./images/image_2.png"
import img3 from "./images/image3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.jpg"
import img6 from "./images/img6.jpg"
import img7 from "./images/img7.jpg"
import img8 from "./images/img8.jpg"
import img9 from "./images/img9.jpg"
import img10 from "./images/img10.jpg"
import img11 from "./images/img11.jpg"
import img12 from "./images/img12.jpg"
import img13 from "./images/img13.jpg"
import img14 from "./images/img14.jpg"
import img15 from "./images/img15.jpg"
import img16 from "./images/img16.jpg"

const Ogolosh = () => {
  const [filters, setFilters] = useState({
    listingType: "all",
    category: "all",
    country: "",
  });


  const [selectedListing, setSelectedListing] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const listings = [
    {
      name: "ENA Chalets",
      location: "Lido di Spina, Italy",
      rating: 7.2,
      category: "house",
      type: "offering",
      country: "Italy",
      image: img1,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "AlMoIo5",
      location: "Alicante, Spain",
      rating: 6.4,
      category: "apartment",
      type: "offering",
      country: "Spain",
      image: img2,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Just be & b",
      location: "Petrou Karakousi, Greece",
      rating: 7.8,
      category: "studio",
      type: "lookingFor",
      country: "Greece",
      image: img3,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "HOMES",
      location: "Erzhebetvaros, Budapest",
      rating: 9.2,
      category: "house",
      type: "offering",
      country: "Hungary",
      image: img4,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Downtown Homes Relax",
      location: "Fatih, Istanbul",
      rating: 6.1,
      category: "apartment",
      type: "offering",
      country: "Turkey",
      image: img5,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Pair of Kings",
      location: "Podgórze, Kraków",
      rating: 9.2,
      category: "house",
      type: "offering",
      country: "Poland",
      image: img6,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Design Apartment In Party",
      location: "Rudolfsheim-Fünfhaus, Vienna",
      rating: 6.7,
      category: "apartment",
      type: "offering",
      country: "Austria",
      image: img7,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Adagio Downtown MiniHotel",
      location: "Baku, Azerbaijan",
      rating: 8.8,
      category: "hotel",
      type: "offering",
      country: "Azerbaijan",
      image: img8,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Benczur Hotel",
      location: "Kraków, Poland",
      rating: 5.5,
      category: "hotel",
      type: "offering",
      country: "Poland",
      image: img9,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Easy Star Hotel",
      location: "Andresen, Portugal",
      rating: 4.8,
      category: "hotel",
      type: "offering",
      country: "Portugal",
      image:   img10,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Silver Hotel",
      location: "Petrou Karakousi, Greece",
      rating: 7.4,
      category: "hotel",
      type: "offering",
      country: "Greece",
      image: img11,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Erzsébet",
      location: "Alicante, Spain",
      rating: 6.2,
      category: "hotel",
      type: "offering",
      country: "Spain",
      image: img12,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "KVIHotel",
      location: "Madrid, Spain",
      rating: 7.2,
      category: "hotel",
      type: "offering",
      country: "Spain",
      image: img13,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Petit Hotel",
      location: "Madrid, Spain",
      rating: 7.2,
      category: "hotel",
      type: "offering",
      country: "Spain",
      image: img14,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Le Galion Hotel",
      location: "Saint-Martin-de-Ré, France",
      rating: 8.4,
      category: "hotel",
      type: "offering",
      country: "France",
      image: img15,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
    {
      name: "Vila Gale Lagos Hotel",
      location: "Andresen, Portugal",
      rating: 7.1,
      category: "hotel",
      type: "offering",
      country: "Portugal",
      image: img16,
      description: "Чудова квартира з усіма необхідними зручностями.",
      price: "320$ за три доби",
    },
  ];
  
  const filteredListings = listings.filter((listing) => {
    const matchesType = filters.listingType === "all" || listing.type === filters.listingType;
    const matchesCategory = filters.category === "all" || listing.category === filters.category;
    const matchesCountry = listing.country.toLowerCase().includes(filters.country.toLowerCase());
    return matchesType && matchesCategory && matchesCountry;
  });
  

  const openModal = (listing) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
  };

  return (
    <div>
      <h1>Всі оголошення</h1>

      <div className="filter-section">
        <select name="listingType" onChange={handleFilterChange}>
          <option value="all">Всі оголошення</option>
          <option value="offering">Пропонують</option>
          <option value="lookingFor">Шукають</option>
        </select>
        <select name="category" onChange={handleFilterChange}>
          <option value="all">Усі категорії</option>
          <option value="house">Будинок</option>
          <option value="apartment">Квартира</option>
          <option value="studio">Студія</option>
        </select>
        <input type="text" name="country" placeholder="Країна" onChange={handleFilterChange} />
      </div>

      <div className="listings-section">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing, index) => (
            <div key={index} className="listing" onClick={() => openModal(listing)}>
              <img src={listing.image} alt={listing.name} className="listing-image" />
              <h2>{listing.name}</h2>
              <p>{listing.location}</p>
              <p>Рейтинг: {listing.rating}</p>
            </div>
          ))
        ) : (
          <p>Немає оголошень, що відповідають вибраним фільтрам.</p>
        )}
      </div>

      {selectedListing && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedListing.name}</h2>
            <img src={selectedListing.image} alt={selectedListing.name} className="modal-image" />
            
            <p><strong>Локація:</strong> {selectedListing.location}</p>
            <p><strong>Опис:</strong> {selectedListing.description}</p>
            <p><strong>Ціна:</strong> {selectedListing.price}</p>
            <div className="btncont">
            <button className="modal-button">Додати до обраного</button>
            <button className="modal-button">Забронювати</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ogolosh;
