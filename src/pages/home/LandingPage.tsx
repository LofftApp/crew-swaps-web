import BgImage from "../../components/BgImage";
import NavbarHomepage from "../../components/NavbarLandingPage";
import ThemeToggle from "../../components/ThemeToggle";

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavbarHomepage />
      {/* Left Image */}
      <BgImage className="left-0 top-0 -translate-x-1/3 translate-y-[50%] transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 top-0 translate-x-1/3 translate-y-[150%] rotate-180 transform md:translate-x-1/4" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-center text-3xl font-bold">This is landing page</h1>
        <button className="btn btn-outline btn-primary">Try for Free</button>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default LandingPage;
