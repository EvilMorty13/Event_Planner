import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">WeddingBazaar</h1>
        <div className="flex gap-4 ">
          <Link to="/" className="hover:bg-black hover:text-white rounded-lg px-2 py-2 transition">Homepage</Link>
          <Link to="/about" className="hover:bg-black hover:text-white rounded-lg px-2 py-2 transition">About Page</Link>
        </div>
      </div>
    </nav>
  );
}
