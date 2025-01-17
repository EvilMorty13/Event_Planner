import SearchBar from "./SearchBar";


export default function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/623b3463179a9661f793e6c4/0d53cda2-414e-4a08-8791-ffb1f5cc9a83/2021_E_Z_Wedding_667.jpg")' }}
    >
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-4xl font-bold">Best Wedding Planner in Bangladesh</h1>
        <h6 className="text-lg mt-2">
          Hire the best vendors such as Photographer, Makeup Artists, and more.
        </h6>
      </div>
      <SearchBar/>
    </div>
  );
}
