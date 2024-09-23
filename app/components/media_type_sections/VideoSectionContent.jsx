import React from 'react'
import Link from 'next/link';
import useScreenWidth from '../../zustand/useScreenWidth';
import formatDate from '../../utilities/formatDate'
import { FaPlayCircle } from "react-icons/fa";


const VideoSectionContent = ({ imageData }) => {

    const { screenWidth } = useScreenWidth();

    const videoSecWidth = screenWidth < 450 ? "w-full" : "w-[60%]";
    const videoSecHeight = screenWidth < 800 ? "h-[25vmax]" : "h-[35vmin]";

    const itemsSecWidth = screenWidth < 450 ? "w-full" : "w-[40%]";
    const itemsSecHeight = screenWidth < 450 ? "" : "h-full";

    const itemsGap = screenWidth < 450 ? "gap-2" : "";
    const itemsAlign = screenWidth < 450 ? "items-start" : "items-center";
    const buttonWidth = screenWidth < 450 ? "equal-button" : "";

    return (
        <>
            <div className={`${videoSecWidth} ${videoSecHeight} rounded-lg relative`}>
                {imageData.media_type === "video" ? (
                    <Link href={imageData.url} target='_blank'>
                        <img src={imageData.thumbnail_url} alt="image" className='w-full h-full rounded-lg object-cover cursor-pointer' />
                        <div className='play-button'>
                            <FaPlayCircle />
                        </div>
                    </Link>
                ) : (
                    // on rare dates, API returns media type which is neither image nor video
                    <img src={null} alt="not a media file" className='cursor-pointer' />
                )}
            </div>

            <div className={`${itemsSecWidth} ${itemsSecHeight} flex flex-col ${itemsAlign} justify-start ${itemsGap}`}>
                <p className='text-white image-info-text'>Date : {formatDate(imageData.date)}</p>
                <div className={`w-full flex flex-col items-center justify-center flex-grow`}>
                    {imageData.media_type === "video" ? (
                        <div className={`${buttonWidth}`}>
                            <Link href={imageData.url} target='_blank'><button className='btn rounded-3xl apod-button equal-button'>Watch Video</button></Link>
                        </div>
                    ) : (
                        <div className={`${buttonWidth}`}>
                            <button className='btn rounded-3xl apod-button equal-button' disabled><p className='text-white'>Not a media file</p></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default VideoSectionContent