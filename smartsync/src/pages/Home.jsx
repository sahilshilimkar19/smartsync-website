import React from 'react';
import FestiveCarousel from '../components/FestiveCarousel';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Milestones from '../components/Milestones';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <main>
            <FestiveCarousel />
            <Hero />
            <Services />
            <Milestones />
            <Testimonials />
        </main>
    );
};

export default Home;
