
import LikeButton from "./likebutton";

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-102">
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt={username}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{username}</h3>
          <p className="text-gray-700 text-sm mt-2">{content}</p>
        </div>
      </div>

      {/* Like Button */}
      <div className="mt-4 flex justify-end">
        <LikeButton isInitiallyLiked={isLiked} />
      </div>
    </div>
  );
};


export default PostCard;