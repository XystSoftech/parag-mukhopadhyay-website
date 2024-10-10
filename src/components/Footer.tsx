import React from "react";
import { navLink } from "../../data/navLinks";

const Footer = () => {
  return (
    <div className="bg-footerBackground bg-no-repeat bg-center bg-cover text-white/87 min-w-screen ">
      <div className="side-margin">
        <div className="pt-6 md:pt-8 lg:pt-12 xl:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <section className="flex flex-col justify-start items-start gap-5 text-white/70">
            <img src="/logo2.png" className="h-20 lg:h-24" />
            <p className="text-sm leading-loose  text-justify">
              Advocate Parag Mukhopadhyay, a distinguished criminal lawyer, excels in justice advocacy.
            </p>
            <div className="flex justify-start items-center gap-3 text-sm">
              <img src="/icons/location.png" className="w-8" />
              <p>11B, Baikuntha Saha Road, Kolkata-700075</p>
            </div>
            <div className="flex justify-start items-center gap-3 text-sm">
              <img src="/icons/call.png" className="w-8" />
              <p>+91-9831280524</p>
            </div>
            <div className="flex justify-start items-center gap-3 text-sm">
              <img src="/icons/email.png" className="w-8" />
              <a href="mailto:paragmukhopadhyay2@gmail.com">paragmukhopadhyay2@gmail.com</a>
            </div>
          </section>
          <section className="text-white/70">
            <h3 className="text-xl md:text-2xl font-bold">Quick Links</h3>
            <hr className="border-primary border-2 w-1/2 mt-2 mb-4" />
            <div>
              {navLink.map((link) => (
                <div className="flex justify-start items-center gap-3 mb-4" key={link.key}>
                  <img src="/icons/arrow2.png" className="w-2" />
                  <a href={link.link} className="hover:text-primary">{link.title}</a>
                </div>
              ))}
            </div>
          </section>
          <section className="text-white/70">
            <h3 className="text-xl md:text-2xl font-bold">Publication</h3>
            <hr className="border-primary border-2 w-1/2 mt-2 mb-4" />
            <div>
              <a href={'/publication'} className="hover:text-primary">Publication</a>
            </div>
          </section>
        </div>
        <hr className="border-1 border-white my-6 md:my-8 lg:my-12" />
        <div className="text-white/70 flex justify-between items-center text-sm pb-6 md:pb-8 lg:pb-12">
          <h4>© 2024 Advocate Parag Mukhopadhyay™. All Rights Reserved.
          </h4>
          <h4>Designed By Xyst ANS</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
