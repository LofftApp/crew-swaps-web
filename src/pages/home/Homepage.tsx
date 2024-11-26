import BgImage from "../../components/BgImage";

function Homepage() {
  return (
    <div className="h-screen">
      <BgImage className="top-72" />
      <BgImage className="top-0 left-96" />

      <h1 className="text-center text-3xl font-bold">This is homepage</h1>
    </div>
  );
}

export default Homepage;
