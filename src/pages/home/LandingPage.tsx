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

      <BgImage className="xs:-translate-y-[102%] bottom-0 right-0 -translate-y-[65%] translate-x-1/3 rotate-180 transform md:translate-x-1/4" />
      <div data-testid="landing-page" className="xs:p-8 xs:mt-2 flex flex-col items-center justify-center gap-4 p-12 md:gap-6 md:p-12 xl:gap-8 xl:p-20">
        <h1 className="text-center text-4xl font-semibold capitalize leading-[3.5rem] md:text-5xl md:leading-[4rem] xl:text-6xl xl:leading-[4.5rem] 2xl:text-7xl 2xl:leading-[5rem]">
          Swap shifts with your team members fast and easy
        </h1>
        <p className="text-center text-lg text-base-content/75 md:text-2xl xl:text-3xl 2xl:text-4xl">
          Whenever you need to swap shifts, we've got you covered. Just sign in
          and start swapping.
        </p>
        <div className="flex items-center gap-6 xl:gap-14">
          <Feature name="Easy" />
          <Feature name="Fast" />
          <Feature name="Secure" />
        </div>
        <div className="xs:w-[80%] ml-2 flex w-[90%] items-center justify-center gap-2 rounded-full bg-base-300 p-2 text-sm sm:max-w-[50%] md:max-w-[55%] md:text-base lg:max-w-[45%] xl:max-w-[35%] 2xl:max-w-[30%] xl:text-lg 2xl:text-xl">
          <div className="badge badge-primary text-sm font-semibold md:text-base xl:text-lg 2xl:text-xl">
            Trusted
          </div>
          <p className="">by the leading airlines crews ✨</p>
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
