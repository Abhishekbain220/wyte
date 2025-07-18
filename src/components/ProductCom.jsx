import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCom = ({ name, image, id, navigation }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={() => navigate(`${navigation}`)}
      className="
        relative w-[260px] h-[320px] 
        sm:w-[300px] sm:h-[360px] md:w-[340px] md:h-[400px] 
        rounded-xl overflow-hidden 
        shadow-lg cursor-pointer group mx-auto my-8
      "
    >
      {/* Image */}
      <img
        src={`/images/${image}`}
        alt={name}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-all  w-full h-full object-cover 
          duration-500 
          group-hover:scale-110
          sm:group-hover:scale-110 ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
      />

      {/* Overlay Gradient (only on hover for sm and up) */}
      <div className="
        absolute inset-0 
        bg-gradient-to-t from-black via-transparent to-transparent 
        opacity-0 sm:group-hover:opacity-2100
        transition-opacity duration-500
      "></div>

      {/* Text Info */}
      <div className="
        absolute bottom-0 left-0 w-full px-3 py-4 font-semibold text-white 
        transition-all duration-500
        sm:translate-y-8 sm:opacity-0 
        sm:group-hover:translate-y-0 sm:group-hover:opacity-100
        bg-[rgba(0,0,0,0.7)] 
      ">
        <h3 className="text-base sm:text-xl font-semibold">{name}</h3>
        
        <button className="
          mt-3 px-3 py-1.5 bg-[#7AC943] text-white rounded-md 
          hover:bg-green-600 transition duration-300 text-xs sm:text-sm
        ">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCom;