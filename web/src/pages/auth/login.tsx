import { useState } from 'react';
import { Zap } from 'lucide-react';

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
                    <div className='items-center justify-center flex gap-x-1'>
                        <div className='bg-black rounded-full p-1 border border-white'>
                            <Zap size={35} color='white' />
                        </div>
                        <p className='text-2xl font-bold'>FitTrack</p>
                    </div>
                    <div className='text-center mt-10 text-lg font-extralight'>
                        Welcome to FitTrack, your ultimate fitness companion! Track your workouts, monitor progress, and achieve your fitness goals effortlessly.
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
