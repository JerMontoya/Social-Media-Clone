import React, { useRef, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";

const Photos = () => {
  const [photos, setPhotos] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img7,
    img8,
    img9,
    img10,
    img11,
  ]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file);
      setPhotos((prev) => [...prev, newPhoto]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="w-full h-64 rounded-lg object-cover shadow-md"
        />
      ))}

      <div
        className="w-full h-46 bg-black/75 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/60 transition"
        onClick={handleButtonClick}
      >
        <span className="text-gray-300">+ Add Photo</span>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Photos;
