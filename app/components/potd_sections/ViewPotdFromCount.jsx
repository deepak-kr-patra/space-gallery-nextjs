import React from 'react'
import usePicsParameters from '../../zustand/usePicsParameters';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const ViewPotdFromCount = ({ width }) => {

    const { setCount } = usePicsParameters();
    // const navigate = useNavigate();
    const { replace } = useRouter();

    const setCountValue = () => {
        setCount(0);

        const value = document.getElementById('count').value;
        if (value < 1 || value > 20) {
            toast.error(`Enter a number from 1 to 20`);
            return;
        }

        setCount(value);
        localStorage.setItem("count", value);
        replace('/explore/potd/pics-from-count');
    }

    return (
        <div className={`${width} h-full flex flex-col items-center justify-center gap-3 bg-[#312165] rounded-md`}>
            <label htmlFor="count" className='text-white pl-2 section-info-text'>Choose number of pics (1 - 20)</label>
            <input type="number" placeholder="Type here" className="input h-[2.5rem] input-bordered w-1/2 max-w-xs my-input" id='count' />
            <button className="btn rounded-3xl apod-button" onClick={() => setCountValue()}>View Pictures</button>
        </div>
    )
}

export default ViewPotdFromCount