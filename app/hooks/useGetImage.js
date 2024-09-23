'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const useGetImage = (date) => {

    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState([]);

    let urlDate = "";
    if (date) {
        urlDate = `&date=${date}`;
    }

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const getImage = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}${urlDate}&thumbs=true`);

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                setImageData(data);

            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false);
            }
        }
        getImage();
    }, []);

    return { imageData, loading };
}

export default useGetImage