import React, { useState }  from "react";
import { FaStar } from "react-icons/fa";

//Crea un arreglo vacío de tamaño length
const createArray = length => [...Array(length)];

//Component StarRating
export default function StarRating({ style = {}, totalStars = 5 }) {

  const [selectedStars, setSelectedStars] = useState(0); //hook //sets state
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i+1)}
          />
      ))}
      <p> {selectedStars} of {totalStars}</p>
      </div>
  );
}

//Component star
const Star = ({ selected = false , onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

