import React from "react";
import Cards from "./Card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {restaurants &&
          restaurants.map((r) => (
            <Cards
              key={r.id}
              id={r.id}
              title={r.title}
              type={r.type}
              img={r.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Restaurants;
