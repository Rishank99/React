import React from 'react';
import HeroSection from './components/HeroSection';

const Home = () => {

  const data={
    name:"You&Me Shop",
  }
  return <HeroSection myData={data}/>;
}

export default Home;