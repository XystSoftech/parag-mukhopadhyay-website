import React from "react";

const Publication = () => {
  return (
    <div className="bottom-margin-content flex flex-col justify-center items-center gap-6">
      <h2 className="heading text-center text-primary">Publication</h2>
      <p className="text-center text-lg">
        Advocate Parag Mukhopadhyay publication, showcasing his expertise in
        legal matters and thought leadership. His writings include
        insightful articles on contemporary legal issues and landmark case
        analyses.
      </p>
      <a href="/publication">
        <button className="btn-primary hover:text-primary">
          Go to Publication
        </button>
      </a>
    </div>
  );
};

export default Publication;
