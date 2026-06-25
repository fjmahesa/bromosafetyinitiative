import React from 'react';
import Hero from '../sections/home/Hero';
import ImpactStats from '../sections/home/ImpactStats';
import PathAnatomy from '../sections/home/PathAnatomy';
import BrakeEducation from '../sections/home/BrakeEducation';
import OfficialSupport from '../sections/home/OfficialSupport';


import SocialFeedsSwitch from '../components/SocialFeedsSwitch';
import O2OCampaign from '../sections/home/O2OCampaign';
import ArticlesSection from '../sections/home/ArticlesSection';
import MapSection from '../sections/home/MapSection';
import Sponsors from '../components/Sponsors';

function Home() {
  return (
    <div>
      <Hero />
      <div className="page-enter">
        <ImpactStats />
        
        
        <OfficialSupport />
        <O2OCampaign />
        <MapSection />
        <SocialFeedsSwitch />
        
        
        
        <Sponsors />
      </div>
    </div>
  );
}

export default Home;