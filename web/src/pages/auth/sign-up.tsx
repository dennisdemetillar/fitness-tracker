import LogoHeader from '@/components/logo-header';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Full name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Must enter a valid email address.',
    }),
    username: z.string().min(3, {
        message: 'Username must be at least 3 characters.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.',
    }),
    confirmPassword: z.string().min(6, {
        message: 'Confirm Password must be at least 6 characters.',
    }),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'The passwords did not match',
            path: ['confirmPassword'],
        });
    }
});

const SignUp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        // Handle signup logic
    };

    return (
        <div className="flex h-full flex-col sm:flex-row">
            <img
                src="/cover-signup.jpeg"
                className="hidden sm:block w-1/2 h-auto object-cover rounded-r-3xl"
                alt="cover"
            />
            <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 sm:p-16 bg-cover bg-center sm:bg-none sm:relative">
                <div className='block sm:hidden w-full h-[30%] bg-cover bg-center absolute top-0 opacity-15 left-0 z-0 rounded-b-3xl' style={{ backgroundImage: 'url(/cover-signup.jpeg)' }} />
                <div className='z-10'>
                    <LogoHeader />
                    <div className="text-center mt-4 text-[#FFF5E0] text-lg font-extralight p-4 sm:p-0 rounded-2xl sm:rounded-none">
                        Welcome to FitTrack, your ultimate fitness companion! Track your workouts, monitor progress, and achieve your fitness goals effortlessly.
                    </div>
                </div>
                <div className="w-full mt-5 z-10">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="w-full space-y-2 flex flex-col"
                        >
                            <div className="text-2xl font-bold text-[#FFF5E0]">
                                Create Account
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border border-[#41B06E] px-4 rounded-xl py-2">
                                                <User className="text-2xl text-[#FFF5E0]" />
                                                <Input
                                                    {...field}
                                                    className="flex-grow px-4 py-2 border-none"
                                                    type="text"
                                                    placeholder="Full name"
                                                    style={{ boxShadow: 'none' }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border border-[#41B06E] px-4 rounded-xl py-2">
                                                <Mail className="text-2xl text-[#FFF5E0]" />
                                                <Input
                                                    {...field}
                                                    className="flex-grow px-4 py-2 border-none"
                                                    type="email"
                                                    placeholder="Email"
                                                    style={{ boxShadow: 'none' }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border border-[#41B06E] px-4 rounded-xl py-2">
                                                <User className="text-2xl text-[#FFF5E0]" />
                                                <Input
                                                    {...field}
                                                    className="flex-grow px-4 py-2 border-none"
                                                    type="text"
                                                    placeholder="Username"
                                                    style={{ boxShadow: 'none' }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border border-[#41B06E] px-4 rounded-xl py-2">
                                                <Lock className="text-2xl text-[#FFF5E0]" />
                                                <Input
                                                    {...field}
                                                    className="flex-grow px-4 py-2 border-none"
                                                    type="password"
                                                    placeholder="Password"
                                                    style={{ boxShadow: 'none' }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border border-[#41B06E] px-4 rounded-xl py-2">
                                                <Lock className="text-2xl text-[#FFF5E0]" />
                                                <Input
                                                    {...field}
                                                    className="flex-grow px-4 py-2 border-none"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    style={{ boxShadow: 'none' }}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-[#41B06E] text-white py-2 rounded-2xl"
                                style={{ marginTop: 30 }}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
