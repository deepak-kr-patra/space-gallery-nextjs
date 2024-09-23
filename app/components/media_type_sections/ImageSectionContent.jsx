import React from 'react'
import Link from 'next/link';
import formatDate from '../../utilities/formatDate';
import usePicsParameters from '../../zustand/usePicsParameters';
import useScreenWidth from '../../zustand/useScreenWidth';


const ImageSectionContent = ({ imageData }) => {

    const { setMaximizedPicURL } = usePicsParameters();
    const { screenWidth } = useScreenWidth();

    const showMaximizedPic = () => {
        const maximizedPic = document.getElementById('maximizedPic');

        setMaximizedPicURL(imageData.url);
        maximizedPic.classList.add('showMaximizedPic');
    }

    const imageSecWidth = screenWidth < 450 ? "w-full" : "w-[60%]";
    const imageSecHeight = screenWidth < 800 ? "h-[25vmax]" : "h-[35vmin]";

    const itemsSecWidth = screenWidth < 450 ? "w-full" : "w-[40%]";
    const itemsSecHeight = screenWidth < 450 ? "" : "h-full";

    const buttonsFlexDir = screenWidth < 450 ? "" : "flex-col gap-4";
    const itemsGap = screenWidth < 450 ? "gap-2" : "";
    const itemsAlign = screenWidth < 450 ? "items-start" : "items-center";
    const buttonWidth = screenWidth < 450 ? "equal-button" : "";

    return (
        <>
            <div className={`${imageSecWidth} ${imageSecHeight} rounded-lg`}>
                <img src={imageData.url} alt="image" className='w-full h-full rounded-lg object-cover cursor-pointer' onClick={() => showMaximizedPic()} />
            </div>

            <div className={`${itemsSecWidth} ${itemsSecHeight} flex flex-col ${itemsAlign} justify-start ${itemsGap}`}>
                <p className='text-white image-info-text'>Date : {formatDate(imageData.date)}</p>
                <div className={`w-full flex ${buttonsFlexDir} items-center justify-center gap-2 flex-grow`}>
                    <div className={`${buttonWidth}`}>
                        <button className='btn rounded-3xl apod-button equal-button' onClick={() => showMaximizedPic()}>Full Size Pic</button>
                    </div>

                    {imageData.hdurl ? (
                        <div className={`${buttonWidth}`}>
                            <Link href={imageData.hdurl} target='_blank'><button className='btn rounded-3xl apod-button equal-button'>View HD Pic</button></Link>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

export default ImageSectionContent