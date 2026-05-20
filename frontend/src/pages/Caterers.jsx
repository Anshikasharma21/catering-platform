import { useEffect, useState } from "react";
import axios from "axios";
import CatererCard from "../components/CatererCard";

function Caterers() {
  const [caterers, setCaterers] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://catering-backend-b8wu.onrender.com/api/caterers");
        setCaterers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filteredCaterers = caterers.filter((caterer) => {
    const matchesSearch = caterer.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice =
      maxPrice === "" || caterer.pricePerPlate <= Number(maxPrice);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Catering Search Platform</h1>
        <p className="subtitle">Discover the perfect caterer for your event</p>
      </div>

      <div className="filters">
        <div className="input-wrap">
          <span className="input-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by caterer name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <span className="input-icon">₹</span>
          <input
            type="number"
            placeholder="Max price per plate"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <p className="result-count">
        {filteredCaterers.length} caterer{filteredCaterers.length !== 1 ? "s" : ""} found
      </p>

      <div className="grid">
        {filteredCaterers.length > 0 ? (
          filteredCaterers.map((caterer) => (
            <CatererCard key={caterer._id} caterer={caterer} />
          ))
        ) : (
          <p className="no-results">No caterers match your filters</p>
        )}
      </div>
    </div>
  );
}

export default Caterers;