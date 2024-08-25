import React from "react";

const AboutUs = () => {
    return (
        <div className="bottom-margin-content">
            <h2 className="heading-secondary text-center mb-4">
                Know Your <span className="heading text-primary">Advocate</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-center items-center" >
                <div>
                    <p className="leading-loose text-justify mb-4 md:mb-6 text-black/60">
                        <span className="text-lg md:text-xl lg:text-2xl text-primary font-extrabold ">Parag Mukhopadhyay</span> is a distinguished advocate renowned for his
                        extensive expertise and comprehensive academic background. With
                        qualifications including <b className="italic">B.Sc., LL.M.</b>, and several specialized
                        diplomas in <b className="italic">D.L.T., P.G.D.C.F.S., M.F.M., M.A. (Police Admn.), D.C.L., D.L.LA.L., P.G.D. P.M. & I.R., C.H.F.I.</b> Mr. Mukhopadhyay stands out as a leader in the legal field.
                        As a <span className="standout-text">Senior Public Prosecutor,Government of West Bengal</span> and
                        an active member of the <b className="standout-text"> Bar Associations at the High Court of Calcutta </b>
                        and <b className="standout-text"> Alipur Judges&apos; & Criminal Court</b>, he brings unparalleled skill and
                        dedication to his practice.
                    </p>
                    <button className="btn-primary hover:text-black">Learn More</button>
                </div>

                <img
                    src="/parag-mukhopadhyay.png"
                    className="w-[20rem] md:w-[25rem] lg:w-[30rem] mx-auto"
                />
            </div>

        </div>
    );
};

export default AboutUs;
