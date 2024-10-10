"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Avatar } from '@chakra-ui/react'
import React from 'react'

const ColleagueGroupPage = () => {
    return (
        <div>
            <Navbar />
            <div className='side-margin py-6 md:py-8 bottom-margin-content'>
                <h1 className="heading">
                    Associates Groups
                </h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:w-3/4" />
                <p className='mb-6'>The Advocate Colleague Group section connects legal professionals, featuring profiles with specialization and contact details for easy collaboration.</p>
                <div className='flex flex-wrap justify-around gap-4 md:gap-6'>
                    <li className="flex items-center space-x-4 p-4 border-2 border-primary rounded-lg shadow-sm hover:bg-primary/10 transition-colors duration-200 w-full">
                        <Avatar src='/icons/advocate.png' />
                        <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Advocate Susandip Pathak</h3>
                            <p>He used to contribute knowledge of civil laws as well as consumer forum laws.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-center space-x-4 p-4 border-2 border-primary rounded-lg shadow-sm hover:bg-primary/10 transition-colors duration-200 w-full">
                        <Avatar src='/icons/advocate.png' />
                        <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Advocate Subir Ranjan Chakraborty</h3>
                            He used to share his knowledge on criminal laws and miscellaneous affairs.
                        </div>
                    </li>
                    <li className="flex items-center space-x-4 p-4 border-2 border-primary rounded-lg shadow-sm hover:bg-primary/10 transition-colors duration-200 w-full">
                        <Avatar src='/icons/advocate.png' />
                        <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Advocate Suprakash Dhar</h3>
                            <p> He used to contribute his knowledge regarding the laws relating to industrial, labour and company affairs.</p>
                        </div>
                    </li>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ColleagueGroupPage