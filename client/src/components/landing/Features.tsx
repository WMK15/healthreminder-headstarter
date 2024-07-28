import { useInView } from 'react-intersection-observer';

type FeatureItemProps = {
    title: string;
    description: string;
};


const FeatureItem = ({ title, description }: FeatureItemProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div
            ref={ref}
            className={`animate__animated ${inView ? 'animate__fadeInUp' : ''} p-6 bg-white shadow-md`}
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Features = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureItem
                        title="Appointment Reminders"
                        description="Get notified about upcoming doctor appointments."
                    />
                    <FeatureItem
                        title="Medication Alerts"
                        description="Never forget to take your medicines on time."
                    />
                    <FeatureItem
                        title="Health Tips"
                        description="Receive daily health tips to stay healthy."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;