import React from 'react';
import HeroContent from '../components/HeroContent';
import Navbar from '../components/Navbar';
import WelcomeImg from '../components/WelcomeImg';

const Home = () => {
  return (
    <div className='h-auto w-auto flex justify-center items-center mt-10'>
      <div className='fixed top-0 left-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='grid sm:grid-cols-10 max-sm:grid-rows-2 w-auto h-auto'>
        <div className='sm:col-span-3 flex justify-center items-center mt-10'>
          <WelcomeImg />
        </div>
        <div className='w-full sm:col-span-7 flex justify-center items-center'>
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
