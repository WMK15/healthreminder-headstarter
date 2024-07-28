// src/pages/LandingPage.js
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
};

export default LandingPage;
