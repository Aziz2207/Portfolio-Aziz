import React from 'react';

export default function Footer() {
    const listNavbar = [
        { name: 'Home', link: '#' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
    ];

    return (
        <footer className='bg-gray-700 rounded-lg shadow'>
            <div className='w-full mx-auto max-w-screen-xl p-4 flex justify-center'>
                <ul className='flex flex-wrap items-center justify-center text-sm font-medium text-gray-100'>
                    {listNavbar.map((item, index) => (
                        <a key={index} href={item.link} className='hover:text-teal-400 mx-4'>
                            {item.name}
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
