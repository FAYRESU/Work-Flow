import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Restaurants from "./components/Restaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  // โหลดข้อมูลจาก db.json (ผ่าน json-server)
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-4">
        <Restaurants restaurants={restaurants} />
      </div>
    </>
  );
}

export default App;
