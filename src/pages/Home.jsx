import React from 'react';
import HeroContent from '../components/HeroContent';
import Navbar from '../components/Navbar';
import WelcomeImg from '../components/WelcomeImg';

const Home = () => {
  return (
    <div className=' h-screen mt-5'>
      <div className=' fixed top-0 left-0 w-full z-50'>
      <Navbar/>
      </div>
      <div className=' grid grid-cols-10  max-sm:grid-cols-none w-auto h-auto'>
        <div className=' col-span-3 max-sm:mt-12 w-screen items-center mt-10'>
            <WelcomeImg/>
        </div>
        <div className=' col-span-7 lg:mt-20 max-sm:mt-4 p-5'>
            <HeroContent/>
        </div>
      </div>
    </div>
  );
};

export default Home;
