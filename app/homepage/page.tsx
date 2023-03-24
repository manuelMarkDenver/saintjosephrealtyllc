'use client';
import { lazy, Suspense } from 'react';

const Banner = lazy(() => import('./Banner'));
const Offers = lazy(() => import('./Offers'));
const Projects = lazy(() => import('./projects'));
const Services = lazy(() => import('./Services'));
const MissionVision = lazy(() => import('./MissionVision'));
const Contact = lazy(() => import('./contact'));

const Homepage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>

      <Offers />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <MissionVision />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Homepage;
