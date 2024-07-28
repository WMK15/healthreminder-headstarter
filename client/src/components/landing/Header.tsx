import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md py-4 mt-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl font-bold">Health Reminder App</div>
                <nav className="hidden md:flex space-x-4">
                    <Link to="#features" className="text-gray-600 hover:text-blue-500">Features</Link>
                    <Link to="#cta" className="text-gray-600 hover:text-blue-500">Get Started</Link>
                    <Button className="bg-blue-500 text-white px-4 py-2">Sign Up</Button>
                </nav>
                <div className="md:hidden">
                    <button
                        id="mobile-menu-button"
                        className="text-gray-600 hover:text-blue-500"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
                <Link to="#features" className="block text-gray-600 hover:text-blue-500 mb-2">Features</Link>
                <Link to="#cta" className="block text-gray-600 hover:text-blue-500 mb-2">Get Started</Link>
                <Button className="bg-blue-500 text-white w-full py-2">Sign Up</Button>
            </div>
            <Toaster />
        </header>
    );
};

export default Header;
