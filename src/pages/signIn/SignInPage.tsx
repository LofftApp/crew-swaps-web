import BgImage from "../../components/BgImage";

function SignInPage() {
  return (
    <div className="relative mx-auto flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 -translate-y-[65%] translate-x-1/3 rotate-180 transform xs:-translate-y-[72%] md:-translate-y-[76%] md:translate-x-1/4" />
    </div>
  );
}

export default SignInPage;
