import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
        <div>
          <h1 className="text-2xl font-bold">WeddingBazaar</h1>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">Know about us</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 transition">About us</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">Other Services</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 transition">Mandap</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Make My Wedding</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">You need to know</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">Follow us on</h1>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-pink-500 transition"><InstagramIcon fontSize="large" /></a>
            <a href="#" className="hover:text-pink-500 transition"><FacebookIcon fontSize="large" /></a>
            <a href="#" className="hover:text-pink-500 transition"><PinterestIcon fontSize="large" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © Copyright 2025 
      </div>
    </footer>
  );
}
