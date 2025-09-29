import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PostBtns = () => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments((prev) => [...prev, `You: ${newComment}`]);
    setNewComment("");
  };

  return (
    <div>
      <div className="flex space-x-4 mb-2">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      liked
                        ? "bg-pink-500 text-white"
                        : "bg-gray-800 text-gray-300"
                    }
                    hover:${liked ? "bg-pink-600" : "bg-gray-700"}`}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button
          onClick={toggleComments}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      showComments
                        ? "bg-pink-500 text-white"
                        : "bg-gray-800 text-gray-300"
                    }
                    hover:${showComments ? "bg-pink-600" : "bg-gray-700"}`}
        >
          💬 Comment
        </button>
        <button className="cursor-not-allowed flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700">
          <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
          Share
        </button>
      </div>
      {showComments && (
        <div className="mt-2 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 bg-gray-900 text-white p-2 rounded-md"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={addComment}
              className="bg-pink-500 text-white px-3 rounded-md hover:bg-pink-600"
            >
              Post
            </button>
          </div>
          {comments.length > 0 && (
            <div className="bg-gray-800/70 rounded-lg p-2 space-y-2">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="text-gray-300 bg-gray-900/70 p-2 rounded-md"
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostBtns;
