import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutUsCom from './AboutUsCom';
import ProductCom from './ProductCom';
import { ProductContext } from '../utils/ProductContext';

const Home = () => {
    
    let {banners, banner,setBanner,products,product,setProduct,ProductCategory}=useContext(ProductContext)
    

    let counter = 0;

    const getBanner = () => {
        setBanner(banners[counter]);
        counter = (counter + 1) % banners.length;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getBanner();
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    // Product Array and Function
    

    return (
        <div className="min-h-screen overflow-hidden w-full">
            {/* Background gradient section (no animation) */}
            {/* Page 1 */}
            <div
                style={{ background: banner.gradient }}
                className="relative pb-10 pt-16 px-6 md:mt-25 md:px-16 lg:px-24   h-[115vmax] md:h-[87vh] w-full"
            >
                {/* Overlay */}
                <div className="bg-black opacity-50 md:h-[73vh] md:w-[90vw] md:left-24 md:mt-0 mt-[4vh] md:top-16 absolute inset-0 z-10"></div>

                {/* Content with animation */}
                <motion.div
                    key={banner.image}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 flex md:mt-0 mt-[9vh] flex-col md:flex-row items-center gap-8 h-full md:w-[90vw]"
                >
                    <motion.img
                        key={banner.image + "_img"}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="h-52 sm:h-60 md:h-[48vh] mb-6 md:mb-[8vh]"
                        src={banner.image}
                        alt="Banner"
                    />

                    <motion.div
                        key={banner.title + "_text"}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full md:pt-[6vh]"
                    >
                        <h1
                            style={{ color: banner.textColor }}
                            className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-0 md:ml-[4vh]"
                        >
                            {banner.title}
                        </h1>

                        <p className="mt-6  md:mt-[6vh] text-white text-base sm:text-lg md:text-xl leading-relaxed md:leading-10 ml-0 md:ml-[2vh] max-w-3xl">
                            {banner.para}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between font-semibold text-base sm:text-lg md:text-xl mt-8 md:mt-[10vh] px-0 md:px-[6vh] text-white gap-4 sm:gap-0">
                            <img className="h-16 bg-white sm:h-20 rounded-full p-2" src="logo.png" alt="Logo" />
                            <h2 className="text-center sm:text-right sm:mr-[4vh] sm:w-auto">
                                {banner.name}
                            </h2>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* page 2 */}
            <AboutUsCom />
            {/* Page 3 */}
            <div className='px-4 sm:px-8 md:px-[8vw] lg:pl-[11vw] flex flex-wrap gap-4 sm:gap-6 mt-[6vh] sm:mt-[10vh] lg:mt-[12vh] pt-[6vh] sm:pt-[8vh]  '>
                {
                    product.map((p, i) => (
                        <ProductCom id={p.id} name={p.name} image={p.image} navigation={`/product/${p.id}`} />
                    ))
                }
            </div>
            {/* page 4 */}
            <div className="px-4 sm:px-8 md:px-[8vw] lg:pl-[11vw] flex flex-wrap gap-4 sm:gap-6 mt-[6vh] sm:mt-[10vh] lg:mt-[12vh] pt-[6vh] sm:pt-[8vh] ">
                <motion.div
                        className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug">
                             Our <span className="text-[#76bc21]">Categories</span>
                          </h1>
                          
                        </div>
                      </motion.div>
                {
                    ProductCategory.map((p, i) => (
                        <ProductCom id={p.id} name={p.name} image={p.image} navigation={`/${p.name}`} />
                    ))
                }
            </div>

            {/* page 5 */}
            <div
                style={{ backgroundImage: `url(/poster.jpg)` }}
                className="relative z-0 w-full h-[40vh] bg-cover bg-center bg-no-repeat
             after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-10
             flex justify-center items-center px-4 sm:px-8 md:px-12"
            >
                <h1
                    className="relative z-20 text-center text-white text-base sm:text-lg md:text-2xl 
               font-semibold max-w-[90vw] sm:max-w-[80vw] animate-fade-in"
                >
                    Wyte is a panoply of Advertising substrates with more than 200 printable materials
                    for U.V., Inkjet, Latex, and Eco solvent machines.
                </h1>
            </div>

            


        </div >
    );
};

export default Home;
