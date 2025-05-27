import React from 'react';

const ProductCom = ({name,image}) => {
  return (
    <div className="w-[35vh] h-[50vh] perspective-[1000px] cursor-pointer group">
      <style>{`
        .group:hover .card-inner {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        className="card-inner relative w-full h-full duration-700 transform-style-preserve-3d rounded-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#5B2DA7] rounded-xl overflow-hidden flex flex-col items-center justify-center">
          <div className="relative h-[65%] w-full px-5 py-5 overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={image}
              alt="Printable Wallpapers"
            />
          </div>
          <h1 className="mt-3 text-center font-semibold text-white text-lg">
            {name}
          </h1>
        </div>

        {/* Back Side with product image background */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl flex flex-col items-center justify-center rotate-y-180 px-5 py-5 text-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            position: 'relative',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-xl z-0"></div>

          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold mb-4">
              {name}
            </h2>
            <p className="text-white mb-6">
              High-quality printable wallpapers for your home or office.
            </p>
            <button className="px-8 py-3 bg-white text-[#FF9900] font-semibold rounded-md hover:bg-[#fff3e0] transition">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCom;
