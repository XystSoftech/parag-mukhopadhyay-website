"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React, { useState } from 'react'
import { personalInfo } from '../../../data/personal-information'

const page = () => {
    const [data, setData] = useState<{
        fname: string,
        lname: string,
        message: string
    }>({
        fname: '',
        lname: '',
        message: ''
    })

    const handleSubmit = () => {
        const url = `https://wa.me/91${personalInfo.whatsappNumber}?text=Hi, I am ${data.fname} ${data.lname},%0a${data.message}`
        window.open(url, '_ blank');
    }

    const validateInput = () => {
        if (data.fname === '' || data.lname === '' || data.message === '') {
            return false
        } else {
            return true
        }
    }
    return (
        <div>
            <Navbar />
            <div className='side-margin py-6 md:py-8 bottom-margin-content'>
                <h1 className="heading">
                    Contact
                </h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:w-3/4" />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[50vh]'>
                    <section className='hidden md:block'>
                        <img src='/assets/contact.png' />
                    </section>
                    <section className='flex flex-col justify-center'>
                        <form>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input onChange={(e) => setData({ ...data, fname: e.target.value })} value={data.fname} type="text" name="first Name" id="first Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input onChange={(e) => setData({ ...data, lname: e.target.value })} value={data.lname} type="text" name="last Name" id="last Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                                </div>
                            </div>


                            <div className="relative z-0 w-full mb-10 group">
                                <input onChange={(e) => setData({ ...data, message: e.target.value })} value={data.message} type="text" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                            </div>
                        </form>
                        <button type="submit" className="btn-primary hover:text-primary" disabled={!validateInput()} onClick={handleSubmit}>Submit</button>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page