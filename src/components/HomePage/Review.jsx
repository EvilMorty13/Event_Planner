import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Review() {
  const reviews = [
    {
      text: "I found the perfect makeover artist for my wedding through WeddingBazaar.com. My wedding took place in Indore. Vinaya traveled here and her work was flawless. She styled my hair beautifully and did a fantastic job with the entire makeover.",
      reviewer: "Harmeet Kaur",
      designation: "Wedding Makeup, Indore",
    },
    {
      text: "I found the perfect makeover artist for my wedding through WeddingBazaar.com. My wedding took place in Indore. Vinaya traveled here and her work was flawless. She styled my hair beautifully and did a fantastic job with the entire makeover.",
      reviewer: "Harmeet Kaur",
      designation: "Wedding Makeup, Indore",
    },
    {
      text: "I found the perfect makeover artist for my wedding through WeddingBazaar.com. My wedding took place in Indore. Vinaya traveled here and her work was flawless. She styled my hair beautifully and did a fantastic job with the entire makeover.",
      reviewer: "Harmeet Kaur",
      designation: "Wedding Makeup, Indore",
    },
  ];

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold text-black">Reviews</h1>

      <div className="flex flex-row space-x-4 mt-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-lg p-4 text-left transition duration-500 border-2 border-black"
          >
            <FormatQuoteIcon sx={{color: "#ff3366",fontSize: "3rem"}} />
            <p className="text-lg text-black  font-light">{review.text}</p>
            <p className="text-black font-bold">{review.reviewer}</p>
            <p className="text-black">{review.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
