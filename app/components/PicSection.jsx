'use client'

import React from 'react'
import Loader from './Loader';
import NotAvailable from './NotAvailable';
import MaximizedPicture from './MaximizedPicture';
import PicSectionContent from './PicSectionContent';
import useGetImage from '../hooks/useGetImage'


const PicSection = () => {

    let date = localStorage.getItem("date") || null;

    const { imageData, loading } = useGetImage(date);
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