import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-green-500 text-white py-20">
            <div ref={ref} className={`animate__animated ${inView ? 'animate__fadeInUp' : ''} container mx-auto text-center`}>
                <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
                <p className="mb-8">Start using our app to keep track of your health reminders.</p>
                <Button className="bg-white text-green-500 px-6 py-3">Sign Up Now</Button>
            </div>
        </section>
    );
};
export default CTA;
