'use client';

import Offers from './Offers';
import Services from './Services';
import MissionVision from './MissionVision';
import Projects from './projects';
import Contact from './contact';
import Banner from './Banner';

const Homepage = (props: any) => {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Offers */}
      <Offers />

      {/* Projects */}
      <Projects />

      {/* Services */}
      <Services />

      {/* Mission Vision */}
      <MissionVision />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default Homepage;
