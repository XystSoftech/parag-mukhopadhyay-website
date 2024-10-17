"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[80vh] side-margin py-6 md:py-8">
                <h1 className="heading-secondary">
                    About <b className="heading text-primary">Adv.Parag Mukhopadhyay</b>
                </h1>
                <hr className="border-2 border-primary mt-2 bottom-margin-content md:w-3/4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-center items-center bottom-margin-content">
                    <div>
                        <p className="leading-loose text-justify mb-4 md:mb-6 text-black/60">
                            <span className="md:text-lg lg:text-2xl text-primary font-extrabold ">
                                Parag Mukhopadhyay
                            </span>{" "}
                            is a distinguished advocate renowned for his extensive expertise
                            and comprehensive academic background, with qualifications
                            viz <b className="italic">B.Sc., LL.M.</b>, and several
                            specialization such as in{" "}
                            <b className="italic">
                                D.L.T., P.G.D.C.F.S., M.F.M., M.A. (Police Admn.), D.C.L.,
                                D.L.LA.L., P.G.D. P.M. & I.R., C.H.F.I.
                            </b>{" "}
                            Mr. Mukhopadhyay stands out as a leader in the legal field respected of{" "}
                            <span className="standout-text">
                                High Courts, District Courts and Criminal Courts. In India
                            </span>{" "}
                            and{" "}

                            he brings unparalleled skill and dedication to his practice.
                        </p>
                    </div>

                    <img
                        src="/parag-mukhopadhyay2.png"
                        className="xl:w-[35rem] lg:w-[30rem] md:w-[25rem] w-[20rem] mx-auto"
                    />
                </div>
                <div className="p-6 border border-black/20 rounded-md bg-gray-50 ">
                    <h3 className="heading-secondary text-center mb-4">
                        Educational Background
                    </h3>
                    <div>
                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">1991</span>
                                <span className="font-bold mr-2 md:text-lg">B.Sc</span>
                                <p className="md:text-lg">(University of Calcutta)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2000</span>
                                <span className="font-bold mr-2 md:text-lg">LL.B</span>
                                <p className="md:text-lg">(Ranchi University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2004</span>
                                <span className="font-bold mr-2 md:text-lg">Diploma in Law of Taxation</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2005</span>
                                <span className="font-bold mr-2 md:text-lg">Post Graduate Diploma in Criminology and Forensic Science</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2007</span>
                                <span className="font-bold mr-2 md:text-lg">Master of Financial Management</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2009</span>
                                <span className="font-bold mr-2 md:text-lg">Master of Arts in Police Administration</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2015</span>
                                <span className="font-bold mr-2 md:text-lg">Diploma in Cyber Law</span>
                                <p className="md:text-lg">(Asian School of Cyber Law & Government Law College, Mumbai)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2015</span>
                                <span className="font-bold mr-2 md:text-lg">Diploma in Labour Laws with Administrative Law</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2016</span>
                                <span className="font-bold mr-2 md:text-lg">Post Graduate Diploma in Personnel Management and Industrial Relations</span>
                                <p className="md:text-lg">(Annamalai University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2018</span>
                                <span className="font-bold mr-2 md:text-lg">LL.M</span>
                                <p className="md:text-lg">(Fakir Mohan University)</p>
                            </section>
                            <div className="h-16 w-1 bg-primary ml-4" />
                        </div>

                        <div className="flex flex-col justify-start">
                            <section className="flex justify-start items-center">
                                <span className="text-xl md:text-2xl font-bold text-primary mr-4">2019</span>
                                <span className="font-bold mr-2 md:text-lg">Computer Hacking Forensic Investigation</span>
                                <p className="md:text-lg">(EC-Council, New Mexico, USA, Certification No. ECC0182437956)</p>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
