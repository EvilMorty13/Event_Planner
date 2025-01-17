import { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function Category() {
  const categories = [
    {
      label: "Makeup Artist",
      amount: 5000,
    },
    {
      label: "Photographer",
      amount: 2000,
    },
    {
      label: "Car",
      amount: 6000,
    },
    {
      label: "DJ",
      amount: 2000,
    },
    {
      label: "Makeup Artist",
      amount: 5000,
    },
    {
      label: "Photographer",
      amount: 2000,
    },
    {
      label: "Car",
      amount: 6000,
    },
    {
      label: "DJ",
      amount: 2000,
    },
    {
      label: "Makeup Artist",
      amount: 5000,
    },
    {
      label: "Photographer",
      amount: 2000,
    },
    {
      label: "Car",
      amount: 6000,
    },
    {
      label: "DJ 2",
      amount: 5000,
    },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const displayedCategories = categories.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="p-20	 bg-white">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-4xl font-bold text-black">Vendor categories</h1>
        <div>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`px-2 py-1 ml-2 rounded-3xl ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            <KeyboardArrowLeftIcon/>
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={`px-2 py-1 ml-2 rounded-3xl ${
              page === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            <KeyboardArrowRightIcon/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4 text-left transition duration-500"
          >
            <img
              src="images/placeholder.png"
              alt={category.label}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg text-black font-semibold">{category.label}</h2>
            <p className="text-gray-500">{category.amount} &gt; </p>
          </div>
        ))}
      </div>
    </div>
  );
}
