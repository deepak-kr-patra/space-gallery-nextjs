import React from 'react'
import { useRouter } from 'next/navigation';
import usePicsParameters from '../../zustand/usePicsParameters'
import toast from 'react-hot-toast';
import validDate from '../../utilities/validDate';
import validDateRange from '../../utilities/validDateRange';


const ViewPotdFromRange = ({ width }) => {

    const { setStartDate, setEndDate } = usePicsParameters();
    // const navigate = useNavigate();
    const { replace } = useRouter();

    const setDates = () => {
        setStartDate(null);
        setEndDate(null);

        const inputStartDate = document.getElementById('startDate').value;
        const inputEndDate = document.getElementById('endDate').value;

        // if start date is not provided by user
        if (!inputStartDate) {
            toast.error("Enter a start date");
            return;
        }

        // if start date is invalid
        if (!validDate(inputStartDate)) {
            toast.error("Enter start date from 16-06-1995 to today");
            return;
        }

        // if end date provided is invalid
        if (inputEndDate && !validDate(inputEndDate)) {
            toast.error("Enter end date from 16-06-1995 to today");
            return;
        }

        // if date range is invalid
        if (!validDateRange(inputStartDate, inputEndDate)) {
            return;
        }

        setStartDate(inputStartDate);
        setEndDate(inputEndDate);

        localStorage.setItem("start-date", inputStartDate);
        localStorage.setItem("end-date", inputEndDate);

        replace('/explore/potd/pics-from-range');
    }

    return (
        <div className={`${width} h-full flex flex-col items-center justify-center gap-3 bg-[#312165] rounded-md`}>
            <p className='text-white section-info-text'>Enter range of dates to view pics</p>
            <div>
                <label htmlFor="fromDate" className='text-white pl-2 text-sm section-info-text'>From</label>
                <label className="input h-[2.5rem] input-bordered flex items-center gap-2 my-input" id='fromDate'>
                    <input type="date" className="grow" id='startDate' />
                </label>
            </div>
            <div>
                <label htmlFor="toDate" className='text-white pl-2 text-sm section-info-text'>To</label>
                <label className="input h-[2.5rem] input-bordered flex items-center gap-2 my-input" id='toDate'>
                    <input type="date" className="grow" id='endDate' />
                </label>
            </div>
            <button className="btn rounded-3xl apod-button" onClick={() => setDates()}>View Pictures</button>
        </div>
    )
}

export default ViewPotdFromRange