import React from "react";
import { personalInfo } from "../../../data/personal-information";

const Contact = () => {
    return (
        <div className="bottom-margin-content">
            <h2 className="heading mb-6 md:mb-8 lg:mb-12 text-center text-primary">
                Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className="flex flex-col gap-4">
                    <section className='flex justify-start items-center gap-2'>
                        <img src='/icons/location.png' className='w-14 border-1 border p-2.5' />
                        <div className='flex gap-2'>
                            <b>Address:</b>
                            <p className="">11B, Baikuntha Saha Road, Kolkata-700075</p>
                        </div>
                    </section>
                    <section className='flex justify-start items-center gap-2'>
                        <img src='/icons/call.png' className='w-14 border-1 border p-2.5' />
                        <div className='flex gap-2'>
                            <b>Contact Number:</b>
                            {
                                personalInfo.phoneNumber.map((num, i) => <a key={i} href={`callto:+91${num}`} className="underline">+91-{num}</a>)
                            }
                        </div>
                    </section>
                    <a href="/contact" className="btn-primary w-fit rounded-md hover:text-primary">Go to Appointment</a>
                </div>
                <iframe
                    src={personalInfo.embedMapSrc}
                    width="100%"
                    height="350"
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
