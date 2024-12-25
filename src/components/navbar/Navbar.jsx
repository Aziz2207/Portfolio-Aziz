import React from 'react';

export default function Navbar() {
    const listNavbar = [
        { name: 'Home', link: '#home' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
    ];

    return (
        <header data-aos='fade-up' className='text-gray-600 body-font z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <button className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-white border border-white hover:border-teal-300 hover:text-teal-300'>
                    <a href='#contact'>Contact me</a>
                </button>
                <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
                    {listNavbar.map((item, index) => (
                        <a key={index} href={item.link} className='mr-5 hover:text-teal-300'>
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
