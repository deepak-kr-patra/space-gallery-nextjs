'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const useGetImagesFromCount = (count) => {

    const [loading, setLoading] = useState(false);
    const [imagesData, setImagesData] = useState([]);

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const getImagesFromCount = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}&thumbs=true`);

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
        getImagesFromCount();
    }, [])

    return { loading, imagesData };
}

export default useGetImagesFromCount