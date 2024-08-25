import React from "react";

const Publication = () => {
  return (
    <div className="bottom-margin-content">
      <h2 className="heading mb-6 md:mb-8 lg:mb-12 text-center text-primary">Publication</h2>
      <div className="mb-4 md:mb-6 lg:mb-8 flex justify-between gap-6 md:gap-8 lg:gap-20 xl:gap-36">
        <div>
          <p className="mb-6 text-justify text-lg">
            Advocate Parag Mulhopadhyay publication, showcasing his expertise in
            legal matters and thought leadership. His writings include
            insightful articles on contemporary legal issues and landmark case
            analyses.
          </p>
          <a href="/pubication">
            <button className="btn-primary hover:text-primary">
              Go to Publication
            </button>
          </a>
        </div>
        <img
          src="/certificate.jpg"
          className="xl:w-[35rem] lg:w-[30rem] md:w-[25rem] w-[20rem]"
        />
      </div>
    </div>
  );
};

export default Publication;
