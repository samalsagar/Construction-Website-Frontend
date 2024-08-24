import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reno1 from "../../assets/Renovations/renov1.jpg";
import reno2 from "../../assets/Renovations/renov2.jpeg";
import reno3 from "../../assets/Renovations/renov3.jpg";
import reno4 from "../../assets/Renovations/renov4.png";

const renovationImages = [
    { image: reno1 },
    { image: reno2 },
    { image: reno3 },
    { image: reno4 }
  ]
  
function Renovation() {
    const { renovationPlans } = useParams();
    const [images, setImages] = useState([]);
    useEffect(()=> {
        setImages(renovationImages);
    },[renovationPlans])
  return (
    <div className="p-4 mt-10 mb-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((item, index) => (
        <div
          key={index} 
          className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg group"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={item.image}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Renovation
