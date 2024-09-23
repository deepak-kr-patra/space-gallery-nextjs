'use client'

import useScreenWidth from '../../zustand/useScreenWidth';


const Layout = ({children}) => {

    const { screenWidth } = useScreenWidth();

    const sectionWidth = screenWidth >= 1200 ? "w-[80%]" : screenWidth < 650 ? "w-full" : "w-[90%]";

    return (
        <>
            <div className='w-full h-[10%] flex items-center justify-center'>
                <h3 className='text-white text-[5vmin]'>NASA Picture Of The Day</h3>
            </div>

            <div className={`${sectionWidth} h-[90%] flex flex-col items-center justify-center gap-4`}>
                {children}
            </div>
        </>
    )
}

export default Layout