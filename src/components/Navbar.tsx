import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { Button } from '@/ui-components/Button';


export const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-slate-700 border-zinc-300 z-10 py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/*logo*/}
        <Link href='/'>
          <div className='flex gap-2 items-center'>
            <Icons.logo className='h-10 w-10 sm:h-6 sm:w-6' />
            <p className='text-gray-100 text-sm font-medium md:block'>
              Tech Ventures
            </p>
          </div>
        </Link>
        {/* Buscador*/}
        <Link href="/sign-in">
          <Button className="bg-black text-white p-2 rounded ml-auto mr-2">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};
