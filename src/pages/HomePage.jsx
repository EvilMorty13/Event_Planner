import Category from '../components/HomePage/Category';
import HelpSection from '../components/HomePage/HelpSection';
import HeroSection from '../components/HomePage/HeroSection';
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
    </div>
  );
}