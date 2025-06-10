import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion';
import ProductCom from './ProductCom';
import Footer from './Footer';
import AboutUsCom from './AboutUsCom';
import OurMission from './OurMission';
import WhyChooseUs from './WhyChooseUs';
import WyteMap from './WyteMap';


const AboutUs = () => {
  return (
   <div className='pt-20'>
    <AboutUsCom/>
    <OurMission />
      <WhyChooseUs />
      <WyteMap />
   </div>
  )
}

export default AboutUs