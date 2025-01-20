import { useState } from "react";

export default function Inspiration() {
  const inspirations = [
    {
      img: "images/placeholder.png",
      text: "Wedding Decor",
    },
    {
      img: "images/placeholder.png",
      text: "Celebrity Weddings",
    },
    {
      img: "images/placeholder.png",
      text: "Bridal Fashion",
    },
    {
      img: "images/placeholder.png",
      text: "Photo Ideas",
    },
    {
      img: "images/placeholder.png",
      text: "Video Ideas",
    },
    {
      img: "images/placeholder.png",
      text: "Celebrity Weddings",
    },
    {
      img: "images/placeholder.png",
      text: "Celebrity Weddings",
    },
    {
      img: "images/placeholder.png",
      text: "Celebrity Weddings",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-gray-900 text-left mb-4">
        Inspirations & Blogs
      </h1>
      <p className="text-lg	font-light text-left mb-4">
        Get tips and ideas on the latest and most interesting wedding trends
      </p>

      <div className="flex flex-wrap gap-6 justify-start">
        {inspirations.map((item, index) => (
            <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-40 h-40 flex flex-col items-center justify-center cursor-pointer text-center transition duration-300"
            >
            <img
                src={item.img}
                alt={item.text}
                className={`w-24 h-24 object-cover rounded-full transition ${
                selectedIndex === index ? "border-4 border-red-500" : ""
                }`}
            />
            <p
                className={`text-lg text-gray-800 py-4 transition ${
                selectedIndex === index ? "font-light" : "font-thin"
                }`}
            >
                {item.text}
            </p>
            </div>
        ))}
        </div>


    </div>
  );
}
