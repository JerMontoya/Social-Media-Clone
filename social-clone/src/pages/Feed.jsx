import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";

const Feed = () => {
  const [fakePosts, setFakePosts] = useState([
    {
      id: 1,
      user: "Jane Doherty",
      avatar: "https://i.pravatar.cc/40?img=5",
      content:
        "Just launched my new project! 🚀 Super excited to share it with you all!",
    },
    {
      id: 2,
      user: "Jonathan Smith",
      avatar: "https://i.pravatar.cc/40?img=12",
      content: "Loving this new social media clone UI! 😍🔥",
    },
    {
      id: 3,
      user: "Samantha Green",
      avatar: "https://i.pravatar.cc/150?img=31",
      content: "Just finished a 10k run! Feeling amazing 🏃‍♀️💨",
    },
    {
      id: 4,
      user: "Michaela Lee",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Cooking my favorite pasta tonight 🍝 Anyone wants the recipe?",
    },
    {
      id: 5,
      user: "Oliver Brown",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "Sunsets are the best therapy 🌅 #peaceful",
    },
    {
      id: 6,
      user: "Daniela Kim",
      avatar: "https://i.pravatar.cc/150?img=34",
      content: "Learning Tailwind CSS is so satisfying! 😎",
    },
    {
      id: 7,
      user: "Emily Clark",
      avatar: "https://i.pravatar.cc/150?img=35",
      content: "Coffee + good book = perfect morning ☕📖",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() === "") return;

    const post = {
      id: fakePosts.length + 1,
      user: "You",
      avatar: profile,
      content: newPost,
    };

    setFakePosts([post, ...fakePosts]);
    setNewPost("");
  };

  const toggleLike = (id) => {
    setFakePosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const toggleComments = (id) => {
    setFakePosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, showComments: !post.showComments } : post
      )
    );
  };

  const addComment = (id) => {
    setFakePosts((prev) =>
      prev.map((post) => {
        if (post.id === id && post.newComment?.trim() !== "") {
          const newComment = {
            user: "You",
            text: post.newComment,
          };
          return {
            ...post,
            comments: [...(post.comments || []), newComment],
            newComment: "",
          };
        }
        return post;
      })
    );
  };

  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-16" />

      {/* Main Feed */}
      <div className="min-h-screen flex justify-between bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 md:p-6">
        {/* Posts Section */}

        <ul className="fixed top-0 left-0 h-screen w-40 bg-black/30 backdrop-blur-md hidden md:flex flex-col justify-evenly items-center text-white font-medium">
          <li className="cursor-not-allowed w-full text-center py-2 rounded-lg hover:bg-white/10 transition">
            Search
          </li>
          <li className="w-full text-center py-2 rounded-lg hover:bg-white/10 cursor-not-allowed transition">
            Friends
          </li>
          <li className="w-full text-center py-2 rounded-lg hover:bg-white/10 cursor-not-allowed transition">
            Notifications
          </li>
          <li className="w-full text-center py-2 rounded-lg hover:bg-white/10 cursor-not-allowed transition">
            Reels
          </li>
          <li className="w-full text-center py-2 rounded-lg hover:bg-white/10 cursor-not-allowed transition">
            Messages
          </li>
          <li className="w-full text-center py-2 rounded-lg hover:bg-white/10 cursor-not-allowed transition">
            Explore
          </li>
        </ul>

        <div className="max-w-2xl mx-auto w-full space-y-6">
          {/* Create Post */}
          <div className="bg-black/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg text-white">
            <div className="flex items-center space-x-3">
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
              <button
                onClick={addPost}
                className="text-pink-400 hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Posts */}
          {fakePosts.map((post) => (
            <div
              key={post.id}
              className="bg-black/75 backdrop-blur-md rounded-2xl p-5 shadow-lg text-white"
            >
              {/* Post Header */}
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.user}
                  className="w-10 h-10 rounded-full border border-pink-400"
                />
                <h3 className="font-semibold text-lg">{post.user}</h3>
              </div>

              {/* Post Content */}
              <p className="text-gray-300 mb-4">{post.content}</p>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-2">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      post.liked
                        ? "bg-pink-500 text-white"
                        : "bg-gray-800 text-gray-300"
                    }
                    hover:${post.liked ? "bg-pink-600" : "bg-gray-700"}`}
                >
                  {post.liked ? "❤️ Liked" : "🤍 Like"}
                </button>
                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700"
                >
                  💬 Comment
                </button>
                <button className="cursor-not-allowed flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700">
                  <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                  Share
                </button>
              </div>

              {/* Comment Dropdown */}
              {post.showComments && (
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="flex-1 bg-gray-900 text-white p-2 rounded-md"
                      value={post.newComment || ""}
                      onChange={(e) =>
                        setFakePosts((prev) =>
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
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 ml-6">
          <div className="fixed bottom-5 right-5 w-72 bg-black/75 backdrop-blur-md rounded-2xl p-4 shadow-lg text-white">
            <button
              className="text-white font-bold text-lg mb-3 bg-white/10 px-3 py-1 rounded-lg"
              onClick={() => setOpenChat(!openChat)}
            >
              Chat With A Friend
            </button>
            {openChat && (
              <>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <img
                      src="https://i.pravatar.cc/40?img=8"
                      alt="friend"
                      className="w-8 h-8 rounded-full border border-pink-400"
                    />
                    <span>Sarah</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="https://i.pravatar.cc/40?img=15"
                      alt="friend"
                      className="w-8 h-8 rounded-full border border-pink-400"
                    />
                    <span>David</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="https://i.pravatar.cc/40?img=22"
                      alt="friend"
                      className="w-8 h-8 rounded-full border border-pink-400"
                    />
                    <span>Emily</span>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
