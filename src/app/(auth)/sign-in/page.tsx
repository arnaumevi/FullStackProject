import SignIn from '../../../components/SignIn';
import { Button } from '@/ui-components/Button';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
    return (
        <div className='absolute inset-0 pt-2'>
            <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
                <Link href="/">
                    <Button className="bg-white text-black p-2 rounded ml-auto mr-2 border-4 border-gray-500">Inicio</Button>
                </Link>
                <SignIn />
            </div>

        </div>
    );
};

export default SignInPage;

