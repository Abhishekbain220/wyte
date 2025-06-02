import React, { useContext } from 'react';
import { ProductContext } from '../utils/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCom = ({ name, image, id }) => {
  let navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${id}`)} className="
      w-full sm:w-[80vw] md:w-[28vw] lg:w-[24vw]
      h-[400px] sm:h-[440px] md:h-[420px]
      perspective-[1000px] cursor-pointer group mx-auto
    ">
      <style>{`
        .card-inner {
          transition: transform 0.8s ease;
          transform-style: preserve-3d;
        }
        .group:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="card-inner relative w-full h-full rounded-xl">
        {/* Front Side */}
        <div className="
          card-face absolute w-full h-full  rounded-xl overflow-hidden
          flex flex-col items-center justify-center px-4 py-4
        ">
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt={name}
              loading="lazy"
            />
          </div>
          <h1 className="
            mt-3 text-center font-semibold text-black 
            text-base sm:text-lg md:text-xl
          ">
            {name}
          </h1>
        </div>

        {/* Back Side */}
        <div
          className="
            card-face card-back absolute w-full h-full rounded-xl flex flex-col items-center justify-center
            px-4 py-4 text-center
          "
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-xl z-0"></div>

          <div className="relative z-10">
            <h2 className="text-white font-bold mb-3 text-lg sm:text-xl md:text-2xl">
              {name}
            </h2>
            <p className="text-white mb-5 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm mx-auto">
              High-quality printable wallpapers for your home or office.
            </p>
            <button className="
  relative px-6 py-2 sm:px-8 sm:py-3 font-semibold rounded-md overflow-hidden
  bg-white text-black transition-all duration-500 ease-in-out
  hover:text-white group/button text-sm sm:text-base
">
              <span className="absolute inset-0 bg-[#7AC943] transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0 rounded-md"></span>
              <span className="relative z-10">View</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCom;
