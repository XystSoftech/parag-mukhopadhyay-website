import React from 'react'

const UpperNav = () => {
    return (
        <div className='py-3 md:py-4 flex flex-col md:flex-row md:justify-between gap-4 md:items-center items-start side-margin'>
            <img src='/logo.png' className='md:h-16 h-12 object-contain' />
            <div className='flex flex-col md:flex-row justify-end md:gap-6 '>
                <section className='flex justify-start items-center gap-2'>
                    <img src='/icons/call.png' className='w-14 border-1 border p-2.5' />
                    <div className='flex flex-col gap-2'>
                        <a href='callto:+91-9831280524' className="text-xs md:text-sm">+91 9831280524</a>
                        <a href='callto:+91-9836759123 ' className="text-xs md:text-sm">+91 9836759123 </a>
                    </div>
                </section>
                <section className='flex justify-start items-center gap-2'>
                    <img src='/icons/location.png' className='w-14 border-1 border p-2.5' />
                    <div className='flex flex-col gap-2'>
                        <p className="text-xs md:text-sm">11B, Baikuntha Saha Road,<br/> Kolkata-700075</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UpperNav