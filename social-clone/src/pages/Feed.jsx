import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Friends from "../components/Friends";
import NewPost from "../components/NewPost";

const Feed = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-16" />
      <div className="min-h-screen flex justify-between bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 md:p-6">
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
          <NewPost />
          <Friends
            showContent={true}
            wrapperClass="bg-black/75 backdrop-blur-md rounded-2xl p-5 shadow-lg text-white mb-4"
            className="flex items-center space-x-3"
            avatarClass="w-10 h-10 rounded-full border border-pink-400"
            userClass="font-semibold text-lg"
            contentClass="text-gray-300"
          />
        </div>
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
