import React from 'react';
import Hero from '../sections/home/Hero';
import ImpactStats from '../sections/home/ImpactStats';
import PathAnatomy from '../sections/home/PathAnatomy';
import BrakeEducation from '../sections/home/BrakeEducation';
import OfficialSupport from '../sections/home/OfficialSupport';
// import SponsorshipCall from '../sections/home/SponsorshipCall';
import SafetyPillars from '../sections/home/SafetyPillars';

function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <PathAnatomy />
      <BrakeEducation />
      <OfficialSupport />
      <SafetyPillars />
      {/* <SponsorshipCall /> */}
    </>
  );
}

export default Home;