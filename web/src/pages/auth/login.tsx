import { useState } from 'react';
import LogoHeader from '@/components/logo-header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic
    };

    return (
        <div className="flex h-screen">
            <img
                src="/cover-login.jpeg"
                className="w-[50%] h-full object-cover rounded-r-3xl"
                alt="cover"
            />
            <div className='w-[50%] mx-10 my-2'>
                <div className='flex flex-col'>
                    <LogoHeader />
                    <div className='text-center mt-10 text-lg font-extralight'>
                        Welcome back to FitTrack! Log in to continue tracking your workouts, monitoring your progress, and achieving your fitness goals effortlessly.
                    </div>
                </div>
                <div className='flex flex-col mt-16'>
                    <p>Login</p>

                </div>
            </div>
        </div>
    );
};

export default Login;
