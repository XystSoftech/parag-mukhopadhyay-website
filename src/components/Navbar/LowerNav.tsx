import React, { useState } from 'react'
import { navLink } from '../../../data/navLinks'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react'
import Link from 'next/link'

const LowerNav = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='bg-grey'>
            <div className='hidden md:block'>
                <div className=' flex justify-center items-center text-white'>
                    {
                        navLink.map((link) => <a key={link.key} href={link.link} className='hover:bg-primary px-6 py-5 duration-300 transition-all'>{link.title}</a>)
                    }
                </div>

            </div>
            <div className='side-margin flex justify-start md:hidden'>
                <img src='/icons/hamburger.png' className='w-8 py-4' onClick={() => setOpen(true)} />
            </div>

            <Drawer
                isOpen={open}
                placement="left"
                onClose={() => setOpen(false)}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton autoFocus={false} _focus={{ outline: 0 }}>
                        <img src='/icons/close.png' className='w-6' />
                    </DrawerCloseButton>

                    <DrawerBody className="mt-16">
                        <section className="flex flex-col justify-center items-center gap-8">
                            {
                                navLink.map((link) => <a key={link.key} href={link.link} className='text-white hover:underline'>{link.title}</a>)
                            }
                        </section>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default LowerNav