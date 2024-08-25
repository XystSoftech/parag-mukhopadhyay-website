import React from "react";

const link =
    "https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg";

const BlogsCard = ({
    image,
    title,
    date,
    brief,
    id
}: {
    image: string;
    title: string;
    date: string;
    brief: string;
    id:string
}) => {
    return (
        <div className="group max-w-[30rem] bg-neutral-100 rounded-b-md">
            <a href={`/blogs/${id}`}>
                <img src={image} className="object-cover rounded-t-md md:h-[20rem]" />
            </a>
            <div className="bg-bg-grey p-4 rounded-b-md">
                <div className="flex items-center gap-2">
                    <img src="/icons/calender.png" className="w-8" />
                    <p>{date}</p>
                </div>
                <hr className="my-2 h-2" />
                <div>
                    <h3 className="heading-secondary group-hover:text-blue-primary group-hover:cursor-pointer my-2">
                        {title}
                    </h3>
                    <p className="my-2 paragraph line-clamp-2">
                        {brief}
                    </p>
                    <a
                        href={`/blogs/${id}`}
                        className="btn-primary rounded-md hover:text-primary"
                    >
                        <span>Read</span>
                        {/* <img src="/icons/arrow-black.png" className="w-6" /> */}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;