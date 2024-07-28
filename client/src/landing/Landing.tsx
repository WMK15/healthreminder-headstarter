import CTA from '@/components/landing/CTA';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';

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
