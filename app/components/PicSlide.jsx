import React from 'react'
import PicSectionContent from './PicSectionContent';


const PicSlide = ({ slideNumber, totalItems, singleImageData }) => {

    return (
        <div className="carousel-item relative w-full h-full flex flex-col gap-4">
            <PicSectionContent imageData={singleImageData} slideNumber={slideNumber} totalItems={totalItems} />
        </div>
    )
}

export default PicSlide