import React from "react";
import PostBtns from "./PostBtns";

const Friends = ({
  showContent = true,
  showButtons = true,
  profileWrapClass = "",
  avatarClass = "",
  userClass = "",
  contentClass = "",
  className = "",
  wrapperClass = "",
}) => {
  const friends = [
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
    {
    id: 8,
    user: "Makenna Rivera",
    avatar: "https://i.pravatar.cc/150?img=36",
    content: "Back at the gym after a long break 💪 Feels good to be consistent again!",
  },
  {
    id: 9,
    user: "Ava Thompson",
    avatar: "https://i.pravatar.cc/150?img=37",
    content: "Baked my first sourdough bread today 🍞 It turned out amazing!",
  },
  {
    id: 10,
    user: "Lia Patel",
    avatar: "https://i.pravatar.cc/150?img=38",
    content: "Exploring React hooks more deeply 🔥 Anyone else loving useEffect?",
  },
  {
    id: 11,
    user: "Sophia Martinez",
    avatar: "https://i.pravatar.cc/150?img=39",
    content: "Movie night with friends 🎬🍿 Recommendations for thrillers?",
  },
  {
    id: 12,
    user: "Ethel Walker",
    avatar: "https://i.pravatar.cc/150?img=40",
    content: "Learning guitar chords 🎸 Fingers hurt, but progress feels awesome!",
  },
  ];

  return (
    <div className={profileWrapClass}>
      {friends.map((friend) => (
      <div className={`space-y-4 ${wrapperClass}`}>
          <div key={friend.id} className={className}>
            <img
              src={friend.avatar}
              alt={friend.user}
              className={avatarClass}
            />
            <h1 className={userClass}>{friend.user}</h1>
          </div>
          {showContent && <p className={contentClass}>{friend.content}</p>}
          {showButtons && <PostBtns />}
        </div>
      ))}
    </div>
  );
};

export default Friends;
