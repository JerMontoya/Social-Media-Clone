import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CycleButton from "../components/CycleButton";
import Friends from "../components/Friends";
import Photos from "../components/Photos";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [postInput, setPostInput] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);

  // State for posts on the profile page
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Jeralyn Montoya",
      content: "Welcome to my profile page! 🎉",
      liked: false,
      comments: [],
    },
  ]);

  const handleCreatePost = () => {
    if (postInput.trim() === "") return;

    const newPost = {
      id: Date.now(),
      name: "Jeralyn Montoya", // you can pull the logged-in user’s name here
      content: postInput,
      liked: false,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setPostInput("");
  };

  const handleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  // Add a comment to a post

  const toggleComments = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((posts) =>
        posts.id === id
          ? { ...posts, showComments: !posts.showComments }
          : posts
      )
    );
  };

  const addComment = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id && posts.newComment?.trim() !== "") {
          const newComment = {
            user: "You",
            text: post.newComment,
          };
          return {
            ...post,
            comments: [...(posts.comments || []), newComment],
            newComment: "",
          };
        }
        return posts;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="relative inline-block">
          <img
            src={profile}
            alt=""
            className="w-1/2 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h1 className="absolute top-5 right-3 px-3 py-1 text-xl sm:text-4xl font-bold text-white tracking-wide">
            Jeralyn Montoya
          </h1>
          <ul className="absolute top-20 right-20 flex flex-col text-center space-y-2 text-white font-medium">
            <li>6 Friends</li>
            <li>1 Post</li>
            <li className="bg-white/10 px-3 py-1 rounded-lg cursor-not-allowed">
              Edit Profile
            </li>
            <li className="bg-white/10 px-3 py-1 rounded-lg cursor-not-allowed">
              Share Profile
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-6 sm:gap-10 mt-6">
          <button
            onClick={() => setActiveTab("posts")}
            className={`px-4 py-1 rounded-lg font-semibold shadow-md ${
              activeTab === "posts"
                ? "text-white font-medium hover:text-pink-400 transition border-2 border-white p-1 px-2"
                : "text-white font-medium hover:text-pink-400 border-b-2 border-transparent hover:border-pink-500 transition"
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-1 rounded-lg font-semibold shadow-md ${
              activeTab === "about"
                ? "text-white font-medium hover:text-pink-400 transition border-2 border-white p-1 px-2"
                : "text-white font-medium hover:text-pink-400 border-b-2 border-transparent hover:border-pink-500 transition"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("friends")}
            className={`px-4 py-1 rounded-lg font-semibold shadow-md ${
              activeTab === "friends"
                ? "text-white font-medium hover:text-pink-400 transition border-2 border-white p-1 px-2"
                : "text-white font-medium hover:text-pink-400 border-b-2 border-transparent hover:border-pink-500 transition"
            }`}
          >
            Friends
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-4 py-1 rounded-lg font-semibold shadow-md ${
              activeTab === "photos"
                ? "text-white font-medium hover:text-pink-400 transition border-2 border-white p-1 px-2"
                : "text-white font-medium hover:text-pink-400 border-b-2 border-transparent hover:border-pink-500 transition"
            }`}
          >
            Photos
          </button>
        </div>
        {activeTab === "posts" && (
          <div className="w-full max-w-2xl bg-black/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg text-white space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={profile}
                alt="profile pic"
                className="w-10 h-10 rounded-full border-2 border-pink-400"
              />
              <input
                type="text"
                placeholder="What's on your mind?"
                value={postInput}
                onChange={(e) => setPostInput(e.target.value)}
                className="w-full bg-gray-800 text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={handleCreatePost}
                className="text-pink-400 hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-black/75 backdrop-blur-md rounded-2xl p-4 shadow-md text-white"
                >
                  <h3 className="font-bold">{post.name}</h3>
                  <p>{post.content}</p>
                  <div className="flex items-center space-x-6 mt-3 text-gray-300 text-sm">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                        likedPosts.includes(post.id)
                          ? "bg-pink-500 text-white"
                          : "bg-gray-800 text-gray-300"
                      }`}
                    >
                      {likedPosts.includes(post.id) ? "❤️ Liked" : "🤍 Like"}
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-sm font-semibold transition bg-gray-800 text-gray-300 hover:bg-gray-700"
                    >
                      💬 Comment
                    </button>

                    {/* Comment Dropdown */}
                    {post.showComments && (
                      <div className="mt-3 flex flex-col gap-2">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-1 bg-gray-900 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            value={post.newComment || ""}
                            onChange={(e) =>
                              setPosts((prev) =>
                                prev.map((p) =>
                                  p.id === post.id
                                    ? { ...p, newComment: e.target.value }
                                    : p
                                )
                              )
                            }
                          />
                          <button
                            onClick={() => addComment(post.id)}
                            className="bg-pink-500 text-white px-3 rounded-md hover:bg-pink-600"
                          >
                            Post
                          </button>
                        </div>

                        {/* Show Comments */}
                        <div className="flex flex-col gap-1 mt-2">
                          {post.comments?.map((c, idx) => (
                            <p key={idx} className="text-gray-300 text-sm">
                              <span className="font-semibold text-white">
                                {c.user}:{" "}
                              </span>
                              {c.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    <button className="cursor-not-allowed flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="h-4 w-4"
                      />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="max-full max-w-5xl mx-auto bg-black/75 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-2">About Jeralyn</h2>
            <p className="text-center text-lg mb-4">
              Love living in Alaska, obsessed with clouds, and married to my
              best friend!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              <CycleButton
                labels={[
                  "Married",
                  "Single",
                  "In a Relationship",
                  "It's Complicated",
                  "+ Add New",
                ]}
              />
              <CycleButton
                labels={[
                  "Giddy",
                  "Sad",
                  "Chill",
                  "Excited",
                  "Tired",
                  "Disappointed",
                  "Happy",
                  "+ Add New",
                ]}
              />
              <CycleButton
                labels={[
                  "Job Hunting",
                  "Employed",
                  "On Sabbatical",
                  "It's Complicated",
                  "Student",
                  "+ Add New",
                ]}
              />
              <CycleButton
                labels={[
                  "Anchorage, AK",
                  "Sedalia, CO",
                  "Rexburg, ID",
                  "Tempe, AZ",
                  "Monterey, CA",
                  "+ Add New",
                ]}
              />
              <CycleButton
                labels={[
                  "Bachelor's Degree",
                  "Associate's Degree",
                  "Graduated",
                  "Apprenticeship",
                  "+ Add New",
                ]}
              />
              <CycleButton
                labels={["Ice Cream", "Cookies", "Cake", "Pie", "+ Add New"]}
              />
            </div>
          </div>
        )}

        {activeTab === "friends" && (
          <div className="bg-black/75 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white">
            <h2 className="text-xl font-bold mb-2">Friends</h2>
            <Friends
              showContent={false}
              wrapperClass="grid grid-cols-3 lg:grid-cols-6 gap-4"
              className="flex flex-col gap-4 items-center bg-gray-800/70 p-3 rounded-xl hover:bg-gray-700/70 transition"
              avatarClass="w-20 h-20 rounded-lg object-cover"
              userClass="mt-2 text-sm font-medium text-center"
            />
          </div>
        )}

        {activeTab === "photos" && (
          <div className="bg-black/75 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white gap-4">
            <Photos />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
