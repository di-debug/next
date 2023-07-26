"use client";

import {MdDarkMode, MdLightMode} from 'react-icons'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { useEffect, useState } from "react";
import { signIn, signOut,} from "next-auth/react";
import router from "next/navigation";

const Nav = () => {
  const isUserLoggedIn = false;


  return (
    
    <nav className='flex justify-between w-[50%] mb-16 pt-3 '>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={60}
          height={60}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* Desktop Navigation */}

      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {(
                <Link
                  href={'/login'}
                  type='button'
                  className='black_btn '
                >
                  Log In
                </Link>
              )}
          </>
        )}
      </div>

    </nav>
  );
};

export default Nav;