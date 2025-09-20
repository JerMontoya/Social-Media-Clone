import React, { useState } from 'react';

const Friends = () => {

    const [fakeFriends] = useState([
        {
          id: 1,
          user: "Jane Doherty",
          avatar: "https://i.pravatar.cc/40?img=5",
        },
        {
          id: 2,
          user: "Jonathan Smith",
          avatar: "https://i.pravatar.cc/40?img=12",
        },
        {
          id: 3,
          user: "Samantha Green",
          avatar: "https://i.pravatar.cc/150?img=31",
        },
        {
          id: 4,
          user: "Michaela Lee",
          avatar: "https://i.pravatar.cc/150?img=32",
        },
        {
          id: 5,
          user: "Oliver Brown",
          avatar: "https://i.pravatar.cc/150?img=33",
        },
        {
          id: 6,
          user: "Daniela Kim",
          avatar: "https://i.pravatar.cc/150?img=34",
        },
      ]);

  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-4'>
        {fakeFriends.map((friend) => (
            <div key={friend.id} className='flex flex-col items-center bg-gray-800/70 p-3 rounded-xl hover:bg-gray-700/70 transtion'>
                <img src={friend.avatar} alt={friend.user} className='w-20 h-20 rounded-lg object-cover' />
                <p className='mt-2 text-sm font-medium text-center'>{friend.user}</p>
            </div>
        ))}
    </div>
  );
};

export default Friends;