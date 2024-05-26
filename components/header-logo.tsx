import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function HeaderLogo() {
    return (
        <Link href="/">
            <div className='items-center hidden lg:flex'>
                <Image src="./logo.svg" width={30} height={30} alt="logo"/>
                <h2 className='text-semibold ml-2.5 text-2xl text-white'>Finance Saas</h2>
            </div>
        </Link>
    )
}

export default HeaderLogo;