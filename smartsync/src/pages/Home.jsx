import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import FestiveCarousel from '../components/FestiveCarousel';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Milestones from '../components/Milestones';
import Testimonials from '../components/Testimonials';

const Home = () => {
    usePageTitle('SmartSync Services | SEBI Registered Investment Adviser');
    return (
        <>
            <FestiveCarousel />
            <Hero />
            <Services />
            <Milestones />
            <Testimonials />
        </>
    );
};

export default Home;
