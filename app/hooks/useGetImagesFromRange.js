'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const useGetImagesFromRange = (startDate, endDate) => {

    const [loading, setLoading] = useState(false);
    const [imagesData, setImagesData] = useState([]);

    let urlEndDate = "";
    if (endDate) {
        urlEndDate = `&end_date=${endDate}`;
    }
    
    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const getImagesFromRange = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}${urlEndDate}&thumbs=true`);

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                setImagesData(data);

            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false);
            }
        }
        getImagesFromRange();
    }, [])

    return { loading, imagesData };
}

export default useGetImagesFromRange