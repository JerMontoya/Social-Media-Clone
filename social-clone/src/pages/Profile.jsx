import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";
import CycleButton from "../components/CycleButton";
import Friends from "../components/Friends";
import Photos from "../components/Photos";
import NewPost from "../components/NewPost";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

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
            <NewPost />
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
              showButtons={false}
              profileWrapClass="grid grid-cols-3 lg:grid-cols-6 gap-4"
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
