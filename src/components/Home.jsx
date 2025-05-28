import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutUsCom from './AboutUsCom';
import ProductCom from './ProductCom';

const Home = () => {
    const [banner, setBanner] = useState({
        image: "ban2.jpg",
        title: "CULTURE OF GROWTH @ WYTE",
        para: " Cultivate PASSION within and in your ecosystem. Live on that passion. Let you and team are full of that operating passion, head to toeTEAM & TIME-- - maneuvers us towards attaining long term objectives.Generate these two to draw the larger canvas.",
        name: "PUNEET TANEJA WYTE TEAM",
        gradient: "linear-gradient(to right, #d63384, #6f42c1, #0dcaf0)",
        textColor: "#34AADC"
    });

    let banners = [
        {
            image: "ban2.jpg",
            title: "CULTURE OF GROWTH @ WYTE",
            para: " Cultivate PASSION within and in your ecosystem. Live on that passion. Let you and team are full of that operating passion, head to toeTEAM & TIME-- - maneuvers us towards attaining long term objectives.Generate these two to draw the larger canvas.",
            name: "PUNEET TANEJA WYTE TEAM",
            gradient: "linear-gradient(to right, #d63384, #6f42c1, #0dcaf0)",
            textColor: "#34AADC"
        },
        {
            image: "ban3.jpg",
            title: "CULTURE OF GROWTH @ WYTE",
            para: " Coming together is a beginning, keeping together is progress. together is success. One can either have results or excuses, cannot both.",
            name: "WYTE TEAM @ PAN INDIA",
            gradient: "linear-gradient(to right, #00b4db, #56ab2f, #f7e13d)",
            textColor: "#33AF3D"
        },
        {
            image: "ban1.jpg",
            title: "CULTURE OF GROWTH @ WYTE",
            para: " Strive to create some extra-ordinary product, service and culture. If these things are taken care of, the customer will trust and connect forever. Technology @development and its execution is what trigger the epochal.",
            name: "WYTE TEAM @ PAN INDIA",
            gradient: "linear-gradient(90deg, #fdb846, #c43f6e)",
            textColor: "#FF6156"
        }
    ];

    let counter = 0;

    const getBanner = () => {
        setBanner(banners[counter]);
        counter = (counter + 1) % banners.length;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getBanner();
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    // Product Array and Function
    let products = [
        {
            id: 1,
            name: "Printable Wallpapers",
            image: "product1.jpg"
        },
        {
            id: 2,
            name: "Fabrics",
            image: "product2.jpg"
        },
        {
            id: 3,
            name: "Canvas",
            image: "product3.jpg"
        },
        {
            id: 4,
            name: "Vinyl",
            image: "product4.jpg"
        },
        {
            id: 5,
            name: "Glass Films",
            image: "product5.jpg"
        },
        {
            id: 6,
            name: "Photopapers",
            image: "product6.jpg"
        },
        {
            id: 7,
            name: "Translites",
            image: "product7.jpg"
        },
        {
            id: 8,
            name: "Reflective Vinyls",
            image: "product8.jpg"
        }
    ]

    const [product, setProduct] = useState(products)
    console.log(product)

    return (
        <div className="min-h-screen overflow-hidden w-full">
            {/* Background gradient section (no animation) */}
            {/* Page 1 */}
            <div
                style={{ background: banner.gradient }}
                className="relative pb-10 pt-16 px-6 md:px-16 lg:px-24 h-auto md:h-[87vh] w-full"
            >
                {/* Overlay */}
                <div className="bg-black opacity-50 md:h-[73vh] md:w-[90vw] md:left-24 md:top-16 absolute inset-0 z-10"></div>

                {/* Content with animation */}
                <motion.div
                    key={banner.image}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 flex flex-col md:flex-row items-center gap-8 h-full md:w-[90vw]"
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
                            <img className="h-16 sm:h-20" src="logo.png" alt="Logo" />
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
            <div className='px-4 sm:px-8 md:px-[8vw] lg:pl-[11vw] flex flex-wrap gap-4 sm:gap-6 mt-[6vh] sm:mt-[10vh] lg:mt-[12vh] pt-[6vh] sm:pt-[8vh] bg-[#5C2AA5] '>
                {
                    product.map((p, i) => (
                        <ProductCom name={p.name} image={p.image} />
                    ))
                }
            </div>
            {/* page 4 */}
            <div className="px-4 sm:px-8 md:px-[8vw] lg:pl-[11vw] flex flex-wrap gap-4 sm:gap-6 mt-[6vh] sm:mt-[10vh] lg:mt-[12vh] pt-[6vh] sm:pt-[8vh] bg-[#5C2AA5]">
                <h1 className="w-full text-white text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-4">
                    Our Categories
                </h1>
                {
                    product.map((p, i) => (
                        <ProductCom key={i} name={p.name} image={p.image} />
                    ))
                }
            </div>

        </div>
    );
};

export default Home;
