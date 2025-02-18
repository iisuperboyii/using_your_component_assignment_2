import React, { useState } from "react";

const LikeButton = ({ isInitiallyLiked}) => {
  const [isLiked, setIsLiked] = useState(isInitiallyLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
        isLiked
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;