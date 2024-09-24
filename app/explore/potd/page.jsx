'use client'

import ViewPotd from '../../components/potd_sections/ViewPotd';
import ViewPotdFromRange from '../../components/potd_sections/ViewPotdFromRange';
import ViewPotdFromCount from '../../components/potd_sections/ViewPotdFromCount';
import useScreenWidth from '../../zustand/useScreenWidth'


const PotdContent = () => {

    if (typeof window !== 'undefined') {
        localStorage.clear();
    }
    const { screenWidth } = useScreenWidth();

    return (
        <>
            {screenWidth >= 650 ? (
                <>
                    <div className='w-full h-[40%] flex flex-col items-center justify-center gap-3 bg-[#312165] rounded-md'>
                        <ViewPotd />
                    </div>

                    <div className='w-full h-[60%] flex items-center justify-center gap-4'>
                        <ViewPotdFromRange width={"w-1/2"} />

                        <ViewPotdFromCount width={"w-1/2"} />
                    </div>
                </>
            ) : (
                <>
                    <div className="collapse collapse-arrow bg-[#312165]">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-sm font-medium text-white">
                            Pic by date
                        </div>
                        <div className="collapse-content px-2">
                            <div className='w-full flex flex-col items-center justify-center gap-3 bg-[#312165] rounded-md'>
                                <ViewPotd />
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#312165]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium text-white">
                            Pics by range of dates
                        </div>
                        <div className="collapse-content px-2">
                            <ViewPotdFromRange width={"w-full"} />
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#312165]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium text-white">
                            Pics by number
                        </div>
                        <div className="collapse-content px-2">
                            <ViewPotdFromCount width={"w-full"} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PotdContent