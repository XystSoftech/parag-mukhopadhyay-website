"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { publicationData } from "../../../../data/publication";
import { useEffect, useState } from "react";

const IndividualPublicationPage = ({
    params,
}: {
    params: { publicationId: string };
}) => {
    const [publication, setPublication] = useState<{
        id: string;
        publication: string;
        downloadSrc: string;
        certificateSrc: string;
    } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const id = params.publicationId;
        if (id) {
            const _publication = publicationData.find((pub) => pub.id === id);
            if (_publication) {
                setPublication(_publication);
            }
        }
    }, []);

    function createMarkup(c: string) {
        return { __html: c };
    }

    return publication ? (
        <div>
            <Navbar />
            <div className="side-margin py-6 md:py-8 bottom-margin-content">
                <h1 className="heading">Publication</h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:mb-6 lg:mb-8 md:w-3/4" />
                <div className="mb-4 md:mb-6 lg:mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 justify-center">
                    <div>
                        <p className="mb-6 text-justify">
                            Advocate Parag Mukhopadhyay publication section, showcasing his
                            expertise in legal matters and thought leadership. His writings
                            include insightful articles on contemporary legal issues and
                            landmark case analyses.
                        </p>
                        <a href={publication.downloadSrc} download target="_blank">
                            {" "}
                            <button className="btn-primary hover:text-primary">
                                Download
                                <img src="/icons/download.png" className="w-6" />
                            </button>
                        </a>
                    </div>
                    <img
                        src={publication.certificateSrc}
                        className="xl:w-[35rem] lg:w-[30rem] md:w-[25rem] w-[20rem]"
                    />
                </div>
                <div className="bg-gray-50 py-4 md:py-6 lg:py-8 px-6 md:px-8 lg:px-12">
                    <article
                        className="prose w-full md:prose-lg text-justify"
                        dangerouslySetInnerHTML={createMarkup(publication?.publication)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        <div className="flex justify-center items-center h-screen">No publication found!!</div>
    );
};

export default IndividualPublicationPage;
