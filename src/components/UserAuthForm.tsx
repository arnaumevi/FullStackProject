"use client";
import { Button } from '@/ui-components/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons';

const UserAuthForm = ({ }) => {

    const [isLoading, setIsLoading] = useState(false)
    console.log("Se imprime el componente")

    const handleClick = () => {

        console.log('The link was clicked.');
    }


    return (
        <div className='flex justify-center'>
            <button onClick={handleClick} className="bg-black text-white px-20 py-2 w-auto rounded flex items-center justify-center" >
                <Icons.google className='h-4 w-4 mr-2' />
                Registro con Google
            </button>

        </div>

    )
}

export default UserAuthForm
