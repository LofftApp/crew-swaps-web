import BgImage from "../../components/BgImage";
import NavbarHomepage from "../../components/NavbarLandingPage";
import ThemeToggle from "../../components/ThemeToggle";

function LandingPage() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-hidden">
      <NavbarHomepage />
        {/* Left Image */}
        <BgImage className="left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
        {/* Right Image */}
        <BgImage className="bottom-0 right-0 top-0 translate-x-1/3 translate-y-[210%] rotate-180 transform md:translate-x-1/4" />

        <div className="absolute left-0 top-0 flex translate-y-[38%] flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-center text-4xl font-bold leading-[3.5rem]">
            Swap shifts with ease for everyone crew memeber
          </h1>
          <p className="text-center text-base-content/75">
            Whenever you need to swap shifts, we've got you covered. Just sign
            in and start swapping
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
