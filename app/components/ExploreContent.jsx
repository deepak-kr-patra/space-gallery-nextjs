'use client'

import Card from './Card'
import useScreenWidth from '../zustand/useScreenWidth';


const ExploreContent = () => {

    const { screenWidth } = useScreenWidth();

    const headingSize = screenWidth < 700 ? "text-[5vmin]" : "text-[6vmin]";

    return (
        <>
            {/* top half */}
            <div className='w-full h-[40%] flex'>
                <div className='w-[70%] h-full flex flex-col items-center justify-center gap-3'>
                    <h3 className={`w-full text-white ${headingSize} text-start`}>Hello, Human</h3>
                    <p className='text-white about-explanation text-justify'>Here you can view Astronomy Picture Of the Day, by NASA. NASA publishes best astronomy picture of a day on it&apos;s APOD API service, since 16 June 1995.</p>
                    <p className='text-white about-explanation text-justify'>You can view spectacular images and videos of a date, or within a range of dates, or several images and videos of random dates.</p>
                </div>
                <div className='w-[30%] h-full flex flex-col items-center justify-center p-2'>
                    <img src="/astronaut.png" alt="astronaut image" className='astronaut-image' />
                </div>
            </div>

            {/* bottom half */}
            <div className='w-full h-[60%] flex flex-col items-center justify-evenly gap-4'>
                <Card />
            </div>
        </>
    )
}

export default ExploreContent