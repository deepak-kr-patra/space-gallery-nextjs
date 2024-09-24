'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import PicSlide from './PicSlide';
import MaximizedPicture from './MaximizedPicture';
import useGetImagesFromRange from '../hooks/useGetImagesFromRange'
import usePicsParameters from '../zustand/usePicsParameters';


const PicsFromRange = () => {

    const { startDate, endDate } = usePicsParameters();
    let given_startDate = startDate;
    let given_endDate = endDate;
    if (typeof window !== 'undefined') {
        given_startDate = localStorage.getItem("start-date") || null;
        given_endDate = localStorage.getItem("end-date") || null;
    }

    const { replace } = useRouter();
    useEffect(() => {
        if (!given_startDate) {
            replace('/explore/potd');
        }
    }, [])

    const { loading, imagesData } = useGetImagesFromRange(given_startDate, given_endDate);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-full h-full carousel gap-2">
                        {imagesData.map((singleImageData, idx) => {
                            return <PicSlide
                                key={idx}
                                slideNumber={idx + 1}
                                totalItems={imagesData.length}
                                singleImageData={singleImageData}
                            />
                        })}
                    </div>

                    {/* maximized pic, which is initially hidden */}
                    <MaximizedPicture />
                </>
            )}
        </>
    )
}

export default PicsFromRange