import BgImage from "../../components/BgImage";
import Feature from "../../components/Feature";
import FooterLandingPage from "../../components/FooterLandingPage";
import NavbarHomepage from "../../components/NavbarLandingPage";

function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      <NavbarHomepage />
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}

      <BgImage className="xs:-translate-y-[100%] bottom-0 right-0 -translate-y-[60%] translate-x-1/3 rotate-180 transform md:translate-x-1/4" />
      <div className="xs:p-8 xs:-mt-10 flex flex-col items-center justify-center gap-4 p-12">
        <h1 className="text-center text-4xl font-semibold capitalize leading-[3.5rem]">
          Swap shifts with your team members fast and easy
        </h1>
        <p className="text-center text-lg text-base-content/75">
          Whenever you need to swap shifts, we've got you covered. Just sign in
          and start swapping.
        </p>
        <div className="flex items-center gap-6">
          <Feature name="Easy" />
          <Feature name="Fast" />
          <Feature name="Secure" />
        </div>
        <div className="mt-2 flex items-center gap-4">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline btn-primary">Learn More</button>
        </div>
      </div>
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
