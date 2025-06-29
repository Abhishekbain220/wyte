import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion';
import ProductCom from './ProductCom';
import Footer from './Footer';
import AboutUsCom from './AboutUsCom';
import OurMission from './OurMission';
import WhyChooseUs from './WhyChooseUs';
import Meta from '../utils/Meta';


const AboutUs = () => {
  return (
    <div className='pt-20 overflow-hidden'>
      <Meta title="About Us Page" description="this is a about us page"/>
      <AboutUsCom />
      <OurMission />
      <WhyChooseUs />
    </div>
  )
}

export default AboutUs