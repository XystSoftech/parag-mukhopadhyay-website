import React, { useState } from "react";
import BlogsCard from "../cards/blog.card";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { allBlogs } from "../../../data/all-blogs";

const Blogs = () => {
    const [mySwiper, setMySwiper] = useState<any>(null);

    return (
        <div className="bottom-margin-content">
            <h2 className="heading text-center text-primary">
                Blogs & Articles
            </h2>
            <p className="text-center lg:text-lg mb-6">
                Explore our latest blogs and articles for insightful updates on
                indian law and justice system
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 justify-between">
                {allBlogs.slice(0, 3).map(({ image, title, date, brief, id }, i) => (

                    <BlogsCard
                        key={i}
                        id={id}
                        image={image}
                        title={title}
                        date={date}
                        brief={brief}
                    />

                ))}
            </div>
            <div className="flex justify-center">
                <a href="/blogs" className="btn-primary rounded-md hover:text-primary">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Blogs;