'use client'

import { usePathname, useRouter } from 'next/navigation';
import useScreenWidth from '../zustand/useScreenWidth'
import { IoArrowBack } from "react-icons/io5";
import { useEffect } from 'react';


const Layout = ({ children }) => {

    const pathname = usePathname();
    const { replace } = useRouter();

    const goBack = () => {

        if (pathname === '/explore') {
            replace('/');
        } else if (pathname === '/explore/potd') {
            replace('/explore');
        } else {
            replace('/explore/potd');
        }
    }

    const { screenWidth, setScreenWidth } = useScreenWidth();

    useEffect(() => {
        window.onresize = function () {
            setScreenWidth(window.innerWidth);
        };
    }, [])

    const boxWidth = screenWidth > 1100 ? "w-[60%]" : screenWidth <= 1100 && screenWidth > 500 ? "w-[80%]" : "w-[90%]";
    const padding = screenWidth < 500 ? "p-4" : "p-6";

    return (
        <div className='h-full w-full bg-gray-400 rounded-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex items-center justify-center
        '>
            <div className={`relative ${boxWidth} h-[90%] flex flex-col items-center justify-center bg-[#1A103D] rounded-md ${padding}`}>
                <div className='absolute top-0 left-0 p-2'>
                    <button className='text-white text-[4.5vmin] back-button' onClick={() => goBack()}><IoArrowBack /></button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout