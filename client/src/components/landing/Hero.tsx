import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-blue-500 text-white py-20">
            <div ref={ref} className={`animate__animated ${inView ? 'animate__fadeIn' : ''} container mx-auto text-center`}>
                <h2 className="text-4xl font-bold mb-4">Never Miss a Health Checkup Again</h2>
                <p className="mb-8">Get timely reminders for all your health-related appointments and medications.</p>
                <Button className="bg-white text-blue-500 px-6 py-3">Get Started</Button>
            </div>
        </section>
    );
};

export default Hero;
