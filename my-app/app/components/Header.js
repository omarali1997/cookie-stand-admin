import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function Header() {

    const {isDarkTheme,toggleThemeHandler} = useContext(ThemeContext);

    return (
        <header>
            <nav className='flex flex-wrap items-center px-3 bg-violet-900'>
                <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image 
                    src='/assets/logo.png'
                    height={90}
                    width={50}
                    alt='logo'
                    ></Image>
                    <span className='text-xl font-bold tracking-wide text-white uppercase'>Cookie Stand Admin</span>
                </Link>
                <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                    <section>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold' href='/'>Home</Link>
                    </section>

                    <button
                    type='button'
                    className='py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded print:hidden '
                    onClick={toggleThemeHandler}
                    ><span>Mood</span></button>
          
                    
                </section>
            </nav>
        </header>
    )
}
