import Category from '../components/HomePage/Category';
import HelpSection from '../components/HomePage/HelpSection';
import HeroSection from '../components/HomePage/HeroSection';
import Reason from '../components/HomePage/Reason';

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Category/>
      <HelpSection/>
      <Reason/>
    </div>
  );
}