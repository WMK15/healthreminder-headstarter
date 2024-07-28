import { useInView } from "react-intersection-observer";

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div ref={ref} className={`animate__animated ${inView ? 'animate__fadeIn' : ''} container mx-auto text-center`}>
                <p>&copy; {new Date().getFullYear()} Health Reminder App. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;
