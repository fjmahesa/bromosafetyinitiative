import React from 'react';
import Hero from '../sections/home/Hero';
import ImpactStats from '../sections/home/ImpactStats';
import PathAnatomy from '../sections/home/PathAnatomy';
import BrakeEducation from '../sections/home/BrakeEducation';
import OfficialSupport from '../sections/home/OfficialSupport';
// import SponsorshipCall from '../sections/home/SponsorshipCall';
// import SafetyPillars from '../sections/home/SafetyPillars';
import InstagramFeed from '../sections/home/InstagramFeed';
import O2OCampaign from '../sections/home/O2OCampaign';
import ArticlesSection from '../sections/home/ArticlesSection';

function Home() {
  return (
    <div>
      <Hero />
      <div className="page-enter">
        <ImpactStats />
        {/* <PathAnatomy /> */}
        {/* <BrakeEducation /> */}
        <OfficialSupport />
        <O2OCampaign />
        <InstagramFeed />
        {/* <ArticlesSection /> */}
        {/* <SafetyPillars /> */}
        {/* <SponsorshipCall /> */}
      </div>
    </div>
  );
}

export default Home;