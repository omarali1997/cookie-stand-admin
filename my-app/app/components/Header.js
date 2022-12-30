import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {

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
                <section>
                    <section>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold' href='/'>Home</Link>
                    </section>
                </section>
            </nav>
        </header>
    )
}
