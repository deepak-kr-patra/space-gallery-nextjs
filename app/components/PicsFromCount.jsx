'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import PicSlide from './PicSlide';
import MaximizedPicture from './MaximizedPicture';
import useGetImagesFromCount from '../hooks/useGetImagesFromCount';
import usePicsParameters from '../zustand/usePicsParameters';


const PicsFromCount = () => {

    const { count } = usePicsParameters();
    let given_count = count;
    if (typeof window !== 'undefined') {
        given_count = localStorage.getItem("count") || 0;
    }

    const { replace } = useRouter();
    useEffect(() => {
        if (given_count <= 0) {
            replace('/explore/potd');
        }
    }, [])

    const { loading, imagesData } = useGetImagesFromCount(given_count);

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
                                slideNumber={idx+1}
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

export default PicsFromCount