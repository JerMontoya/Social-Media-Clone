import React, { useState } from "react";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import PostBtns from "./PostBtns";

const NewPost = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (newPost.trim() === "") return;

    const post = {
      user: "You",
      avatar: profile,
      content: newPost,
    };
    setPosts((prev) => [post, ...prev]);
    setNewPost("");
  };

  return (
    <div>
      <div className="flex items-center space-x-3 bg-black/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg text-white">
        <img
          src={profile}
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-pink-400"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full bg-gray-800 text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button onClick={addPost} className="text-pink-400 hover:text-pink-500">
          <FontAwesomeIcon icon={faPlusCircle} className="h-6 w-6" />
        </button>
      </div>
      <div>
        {posts.map((post, i) => (
          <div className="mt-4 space-y-3 bg-black/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg text-white">
            <div key={i} className="flex items-center space-x-3">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-10 h-10 rounded-full border border-pink-400"
              />
              <h1 className="font-semibold text-lg">{post.user}</h1>
            </div>
            <p className="text-gray-300">{post.content}</p>
            <PostBtns />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPost;
