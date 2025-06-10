import React from "react";

const WyteMap = () => {
  return (
    <div className="w-full bg-[#0f1c3f] py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          
        </h2>
        <div className="w-full rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <iframe
            title="WYTE Delhi Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3541.937245070231!2d77.43370537532046!3d23.2413310790211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE0JzI4LjgiTiA3N8KwMjYnMTAuNiJF!5e1!3m2!1sen!2sin!4v1749586828702!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WyteMap;
