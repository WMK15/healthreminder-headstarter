// src/components/ui/Waitlist.tsx
import React, { useState } from 'react';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Loader from '../shared/Loader';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    email: string;
};

const Waitlist: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<FormValues> = async ({ email }) => {
        setLoading(true);
        try {
            await addDoc(collection(db, 'waitlist'), {
                email: email,
                timestamp: new Date(),
            });
            toast({
                title: 'Success',
                description: 'Successfully added to the waitlist!',
                type: 'background',
            });
        } catch (error) {
            console.error('Error adding document: ', error);
            toast({
                title: 'Error',
                description: 'Error adding to the waitlist.',
                type: 'background',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="waitlist-container">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                <div>
                    <Label htmlFor="email" className="shad-form_label">Enter your email</Label>
                    <Input
                        type="email"
                        id="email"
                        className="shad-input"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <Button type="submit" className="bg-white text-blue-500 px-6 py-3">
                    {loading ? (
                        <div className="flex-center gap-2">
                            <Loader /> Loading...
                        </div>
                    ) : (
                        "Enter waitlist"
                    )}
                </Button>
            </form>
        </div>
    );
};


export default Waitlist;
