"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { personalInfo } from "../../../data/personal-information";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactPage = () => {
  const [data, setData] = useState<{
    name: string;
    address: string;
    phoneNumber: string;
    emailId: string;
    message: string;
  }>({
    name: "",
    address: "",
    phoneNumber: "",
    emailId: "",
    message: "",
  });

  const handleSubmit = () => {
    const message = `Hello Mr. Parag Mukhopadhyay,

My name is ${data.name}, and I am reaching out to you regarding a legal matter. Below are my contact details and the message I would like to convey:

Name: ${data.name}  
Address: ${data.address}
Phone Number: ${data.phoneNumber} 
Email ID: ${data.phoneNumber}

Message:  
${data.message}

I would appreciate your assistance and look forward to your guidance in this matter.

Thank you,  
${data.name}
`;
    const url = `https://wa.me/${
      personalInfo.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_ blank");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateInput = () => {
    if (
      (data.name === "" || data.emailId === "" || data.message === "" ||
      data.phoneNumber === "" || data.address === "")
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="side-margin py-6 md:py-8 bottom-margin-content">
        <h1 className="heading">Contact</h1>
        <hr className="border-2 border-primary mt-2 mb-4 md:w-3/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[50vh]">
          <section className="hidden md:block">
            <img src="/assets/contact.png" />
          </section>
          <section className="flex flex-col justify-center">
            <form className="flex flex-col gap-4" id="application-from">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={data.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email Id</FormLabel>
                <Input
                  type="email"
                  name="emailId"
                  placeholder="Enter Email Id"
                  value={data.emailId}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={data.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={data.address}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  rows={3}
                  placeholder="Enter Your message"
                  value={data.message}
                  onChange={handleInputChange}
                />
              </FormControl>
              <button
                type="submit"
                className="btn-primary hover:text-primary"
                disabled={!validateInput()}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
