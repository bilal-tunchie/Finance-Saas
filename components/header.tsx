import React from 'react'
import HeaderLogo from './header-logo';
// justify-center
function Header() {
    return (
        <header className=' bg-gradient-to-b from-indigo-700 bg-indigo-500 px-4 py-8'>
            <div className="max-w-screen-2xl mx-auto">
                <div className='w-full flex items-center mb-14'>
                    <div className='flex items-center lg:gap-x-16'>
                        <HeaderLogo/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;