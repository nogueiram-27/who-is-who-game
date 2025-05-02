import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Heaader: React.FC = () => {
  return (
    <header className='bg-purple-gradient grid justify-items-center'>
      <div className='p-2 text-white text-xl xl:text-2xl text-center font-semibold'>
        <Link
          key='homepage'
          href='/'
          className='flex items-center gap-x-2 xl:gap-x-4'
        >
          <span className='grid items-center gap-y-1'>
            <Image
              src="/question-mark.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
            <Image
              src="/heart.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
            <Image
              src="/question-mark.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
          </span>
            Consegues adivinhar quem é quem?
          <span className='grid items-center gap-y-1'>
            <Image
              src="/question-mark.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
            <Image
              src="/heart.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
            <Image
              src="/question-mark.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
          </span>
        </Link>
      </div>
    </header>

  );
};

export default Heaader;
