"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { publicationData } from "../../../data/publication";

const PublicationPage = () => {
    function createMarkup(c: string) {
        return { __html: c };
    }


    const downloadFile = () => {
        window.location.href = "/assets/publication.pdf"
    }
    return (
        <div>
            <Navbar />
            <div className="side-margin py-6 md:py-8 bottom-margin-content">
                <h1 className="heading">Publication</h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:mb-6 lg:mb-8 md:w-3/4" />
                <p className="text-lg mb-6">Read publications</p>
                <div className="flex flex-col gap-3">
                {
                    publicationData.map((pub, i) => <a key={i} className="text-sm italic underline" href={`/publication/${pub.id}`}>{pub.title}</a>)
                }
                </div>
              
            </div>
            <Footer />
        </div>
    );
};

export default PublicationPage;
