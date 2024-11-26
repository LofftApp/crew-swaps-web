import BgLeft from "../../components/BgLeft";
import BgRight from "../../components/BgRight";

function Homepage() {
  return (
    <div className="bg-base-50 relative h-screen overflow-hidden">
      {/* Left Image */}
      <BgLeft className="top-0 left-0 transform -translate-x-1/3 translate-y-[50%] md:-translate-x-1/4" />
      {/* Right Image */}
      <BgRight className="right-0 bottom-0 transform translate-x-1/3 -translate-y-[100%] md:translate-x-1/4" />


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
