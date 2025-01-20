import { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BrushIcon from '@mui/icons-material/Brush';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">WeddingBazaar</h1>
        <div className="flex gap-4 relative">
          <Link to="/" className="hover:bg-black hover:text-white rounded-lg px-2 py-2 transition">Homepage</Link>
          <div className="relative">
            <button 
              onClick={() => handleDropdownClick('about')} 
              className="hover:bg-black hover:text-white rounded-lg px-2 py-2 transition"
            >
              Vendors <KeyboardArrowDownIcon/>
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200"><BrushIcon className='mr-1'/> Makeup Artists</Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200"><CameraAltIcon className='mr-1'/> Photographers</Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200"><LocalDiningIcon className='mr-1'/> Caterers</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:bg-black hover:text-white rounded-lg px-2 py-2 transition">About</Link>
        </div>
      </div>
    </nav>
  );
}
