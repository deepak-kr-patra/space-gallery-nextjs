'use client'

import React, { useEffect } from 'react'
import ImageSectionContent from './media_type_sections/ImageSectionContent';
import VideoSectionContent from './media_type_sections/VideoSectionContent';
import useScreenWidth from '../zustand/useScreenWidth'


const PicSectionContent = ({ imageData, slideNumber, totalItems }) => {

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let explanationBoxes = document.querySelectorAll('.explanationBox');
    
            explanationBoxes.forEach(explanationBox => {
                explanationBox.classList.remove('show-scrollbar');
    
                if (explanationBox.scrollHeight > explanationBox.clientHeight) {
                    explanationBox.classList.add('show-scrollbar');
                } else {
                    explanationBox.classList.remove('show-scrollbar');
                }
            });
        }
    }, [screenWidth]);

    const flexDir = screenWidth < 450 ? "flex-col gap-2" : "";

    return (
        <>
            <div className='w-full flex flex-col items-center justify-center bg-[#312165] rounded-md p-2 gap-2'>
                <div className='w-full'>
                    <h4 className='text-white image-title'>{imageData.title}</h4>
                </div>

                <div className={`w-full flex ${flexDir} items-center justify-center`}>
                    {imageData.media_type === 'image' ? (
                        <ImageSectionContent imageData={imageData} />
                    ) : (
                        <VideoSectionContent imageData={imageData} />
                    )}
                </div>

                {/* display carousel number if there is carousel */}
                {slideNumber ? (
                    <div className='bg-[#1A103D] rounded-3xl p-2'>
                        <p className='text-white carousel-number'>{slideNumber} / {totalItems}</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>

            <div className='w-full overflow-y-scroll explanationBox'>
                <p className='text-white image-explanation pr-2 text-justify'>{imageData.explanation}</p>
            </div>

            <div className='w-full mt-auto flex items-center justify-center p-1'>
                {imageData.copyright ? (
                    <p className='text-white image-info-text'>Copyright &copy; {imageData.copyright}</p>
                ) : (
                    <p className='text-white image-info-text'>This file is copyright free</p>
                )}
            </div>
        </>
    )
}

export default PicSectionContent