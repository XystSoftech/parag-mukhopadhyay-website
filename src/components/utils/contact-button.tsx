import React from 'react'
import { personalInfo } from '../../../data/personal-information'

const ContactButton = () => {
  return (
    <div className='fixed z-50 top-1/4 right-0 divide-y-2 divide-primary'>
      <section className='bg-grey/80 border-t-2 border-l-2 border-primary cursor-pointer hover:bg-grey p-4 rounded-tl-md'>
        <a target='_blank' href={`https://wa.me/${personalInfo.whatsappNumber}`}><img src='/icons/whatsapp.png' className='w-10 mx-auto' /></a>
      </section>

      <section className='bg-grey/80 border-b-2 border-l-2  border-primary cursor-pointer hover:bg-grey p-4 rounded-bl-md'>
        <a target='_blank' href={`mailto:${personalInfo.emailId}`}><img src='/icons/email.png' className='w-8 mx-auto' /></a>
      </section>
    </div>
  )
}

export default ContactButton