import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-slate-700 border-zinc-300 z-10 py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/*logo*/}
        <Link href='/' className='flex gap-2 items-center'>
          <p className='text-gray-100 text-sm font-medium md:block'>
            Tech Ventures
          </p>
        </Link>
      </div>
    </div>
  );
};
