import React from "react";

const FriendCard = ({
  showContent = true,
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
  ];

  return (
    <div className={wrapperClass}>
      {friends.map((friend) => (
        <div key={friend.id} className={className}>
          <img src={friend.avatar} alt={friend.user} className={avatarClass} />
          <h1 className={userClass}>{friend.user}</h1>
          {showContent && <p className={contentClass}>{friend.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default FriendCard;
