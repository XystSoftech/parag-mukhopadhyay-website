"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import { allBlogs } from "../../../../data/all-blogs";

const IndividualBlogPage = ({ params }: { params: { blogId: string } }) => {
    const id = params.blogId;
    const [blogData, setBlogData] = useState<any>(null);
    const router = useRouter()

    function createMarkup(c: string) {
        return { __html: c };
    }

    useEffect(() => {
        if (id) {
            const _blog = allBlogs.find((blog) => blog.id === id);
            _blog && setBlogData(_blog);
        }
    }, []);
    return (
        <div>
            <Navbar />
            {blogData ? (
                <div className="side-margin py-4 md:py-6 lg:py-8 mt-20 md:mt-24 min-h-[80vh]">
                    <img src={blogData.image} className="mx-auto mb-4 md:mb-6 lg:mb-8 min-h-[20rem] max-h-[35rem]" />
                    <article className="prose w-full md:prose-lg" dangerouslySetInnerHTML={createMarkup(blogData.blog)} />
                </div>
            ) : (
                <div className="flex flex-col gap-4 min-h-[80vh] justify-center items-center heading-secondary">
                    <p>No Blog Found!!</p>
                    <button className="btn-primary text-base rounded-md hover:text-primary" onClick={() => router.push('/blogs')}>Back</button>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default IndividualBlogPage;