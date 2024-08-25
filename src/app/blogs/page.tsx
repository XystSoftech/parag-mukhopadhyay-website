"use client"
import BlogCard from '@/components/cards/blog.card'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { allBlogs } from '../../../data/all-blogs'

const BlogsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="side-margin py-6 md:py-8 bottom-margin-content">
            <h1 className="heading">
                    Blogs
                </h1>
                <hr className="border-2 border-primary mt-2 mb-4 md:mb-6 md:w-3/4" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                    {allBlogs.map(({ image, title, date, brief, id }, i) => (

                        <BlogCard
                            key={i}
                            id={id}
                            image={image}
                            title={title}
                            date={date}
                            brief={brief}
                        />

                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default BlogsPage