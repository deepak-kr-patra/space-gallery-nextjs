'use client'

import React from 'react'
import Loader from './Loader';
import NotAvailable from './NotAvailable';
import MaximizedPicture from './MaximizedPicture';
import PicSectionContent from './PicSectionContent';
import useGetImage from '../hooks/useGetImage'
import usePicsParameters from '../zustand/usePicsParameters';


const PicSection = () => {

    const { date } = usePicsParameters();
    let given_date = date;
    if (typeof window !== 'undefined') {
        given_date = localStorage.getItem("date") || null;
    }

    const { imageData, loading } = useGetImage(given_date);
    console.log(imageData);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {imageData.code === 404 ? (
                        <NotAvailable />
                    ) : (
                        <>
                            <PicSectionContent imageData={imageData} />

                            {/* maximized pic, which is initially hidden */}
                            <MaximizedPicture />
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default PicSection