'use client'

import React, { useEffect } from 'react'
import usePicsParameters from '../zustand/usePicsParameters';
import { IoClose } from "react-icons/io5";


const MaximizedPicture = () => {

    const { maximizedPicURL } = usePicsParameters();

    // to fit the image according to screen
    useEffect(() => {
        const maximizeImage = () => {
            const img = document.getElementById('selectedImage');
            const screenAspectRatio = window.innerWidth / window.innerHeight;
            const imgAspectRatio = img.naturalWidth / img.naturalHeight;

            if (imgAspectRatio > screenAspectRatio) {
                // Fit by width
                img.style.width = '100%';
                img.style.height = 'auto';
            } else {
                // Fit by height
                img.style.width = 'auto';
                img.style.height = '100%';
            }
        }
        maximizeImage();
    });

    const maximizedPic = document.getElementById('maximizedPic');

    const hideMaximizedPic = () => {
        maximizedPic.classList.contains('showMaximizedPic') ? maximizedPic.classList.remove('showMaximizedPic') : maximizedPic.classList.add('showMaximizedPic');
    }

    return (
        <>
            <div className='maximizedPic' id='maximizedPic' onClick={() => hideMaximizedPic()}>
                <div className='absolute top-0 right-0 p-4'>
                    <button className='text-white text-2xl'><IoClose /></button>
                </div>
                <img id="selectedImage" src={maximizedPicURL} alt="Maximized Image" onClick={() => hideMaximizedPic()} />
            </div>
        </>
    )
}

export default MaximizedPicture