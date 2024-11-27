import BgImage from "../../components/BgImage";


function Homepage() {
  return (
    <div className="bg-base-50 relative h-screen overflow-hidden">
      {/* Left Image */}
      <BgImage className="left-0 top-0 -translate-x-1/3 translate-y-[50%] transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 -translate-y-[100%] translate-x-1/3 rotate-180 transform md:translate-x-1/4" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-secondary text-center text-3xl font-bold">
          This is homepage
        </h1>
        <button className="btn btn-primary btn-outline">Try for Free</button>
      </div>
    </div>
  );
}

export default Homepage;
