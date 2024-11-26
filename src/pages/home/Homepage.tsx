import BgImage from "../../components/BgImage";
import Line1 from "../../components/Line1";

function Homepage() {
  return (
    <div className="bg-base-50 relative h-screen overflow-hidden">
      {/* Left Image */}
      <BgImage className="left-0 top-0 -translate-x-[30%] translate-y-[50%] transform md:-translate-x-[10%]" />


      {/* Right Image */}
      <Line1 className=" -translate-x-1/3 translate-y-[150%] transform md:-translate-x-[20%]" />
      <BgImage className="right-0 top-0 translate-x-1/3 translate-y-[150%] transform md:translate-x-[10%]" />

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
