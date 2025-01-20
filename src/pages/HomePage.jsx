import Category from '../components/HomePage/Category';
import CustomerCare from '../components/HomePage/CustomerCare';
import Download from '../components/HomePage/Download';
import HelpSection from '../components/HomePage/HelpSection';
import HeroSection from '../components/HomePage/HeroSection';
import Inspiration from '../components/HomePage/Inspiration';
import Reason from '../components/HomePage/Reason';
import Review from '../components/HomePage/Review';

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Category/>
      <HelpSection/>
      <Reason/>
      <Review/>
      <CustomerCare/>
      <Inspiration/>
      <Download/>
    </div>
  );
}