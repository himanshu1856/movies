import React, { useEffect, useState } from "react";

const MovieCard = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to check if description is more than 3 lines
  const descriptionRef = React.useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const height = descriptionRef.current.clientHeight;
      if (height > 60) {
        // Assuming each line is approximately 20px tall
        setShowButton(true);
      }
    }
  }, []);
 
  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
     <div className="h-52 overflow-hidden">
        <img className="w-full h-full object-cover" src={"https://image.tmdb.org/t/p/w500/" + image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 h-14">{title}</div>
        <p
          className={`text-gray-700 text-base ${
            isExpanded ? "" : "line-clamp-3"
          }`}
          ref={descriptionRef}
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        {showButton && (
          <button
            onClick={toggleDescription}
            className="text-teal-500 hover:text-teal-700 mt-2"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Add To Favourites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
