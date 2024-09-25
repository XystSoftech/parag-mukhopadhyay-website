"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const PracticeAreaPage = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen side-margin p-6'>
                <h1 className="heading">Practice Area</h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:mb-6 lg:mb-8 md:w-3/4" />
                <div className='flex justify-between items-center flex-wrap gap-8 rounded-md'>
                    <section className='bg-primary shadow-md w-full flex justify-center items-center h-48 rounded-md text-bold heading-secondary text-center p-4'>
                        Criminal Law Related Matter
                    </section>
                    <section className='bg-primary shadow-md w-full flex justify-center items-center h-48 rounded-md text-bold heading-secondary text-center p-4'>
                        Consumer Affairs Related Matter
                    </section>
                    <section className='bg-primary shadow-md w-full flex justify-center items-center h-48 rounded-md text-bold heading-secondary text-center p-4'>
                        Civil Law Related Matter
                    </section>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PracticeAreaPage