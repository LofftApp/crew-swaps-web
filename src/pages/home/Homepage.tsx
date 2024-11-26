import bgHomepage from "../../assets/svg/bg-homepage.svg";

function Homepage() {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgHomepage})` }}
    >
      <h1 className="text-4xl font-bold text-gray-800">This is homepage</h1>
    </div>
  );
}

export default Homepage;
