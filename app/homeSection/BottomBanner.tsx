import Image from 'next/image'
import React from 'react'
import Banner2 from '../public/bannersvg2.svg'

function BottomBanner() {
    return (
        <>
            <div className='max-w-screen-xl'>


                <div className="flex flex-col rounded-[32px] border-2 border-bodercolor1  text-surface shadow-secondary-1 dark:text-white  xl:flex-row  my-16  py-14 ">
                    <div className="flex flex-col justify-start p-6 mx-24 ">

                        <p className="mb-4 text-xl font-semibold tracking-wide">like what you’ve seen? </p>
                        <h3 className="text-2xl font-bold text-surface/75 dark:text-neutral-300  tracking-wide">
                            Level up your  Ideas with CoreDigit X
                        </h3>
                        <div className="border-2 max-w-48 text-center rounded-[40px] py-2 mb-2 mt-8">
                            Get in touch
                        </div>
                    </div>
                    <Image src={Banner2} alt="" className='mx-36 my-5' width={270} />
                </div>
            </div>
        </>
    )
}

export default BottomBanner