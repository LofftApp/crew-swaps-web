import BgImage from "../../components/BgImage";

import { Link } from "react-router";
import { Eye, Mail } from "lucide-react";
import Logo from "../../components/Logo";

function SignInPage() {
  return (
    <div className="relative mx-auto flex min-h-screen flex-col items-center overflow-hidden">
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 -translate-y-[0%] xxs:-translate-y-[0%] translate-x-1/3 rotate-180 transform xs:-translate-y-[0%] md:-translate-y-[76%] md:translate-x-1/4" />

      <div className=" mt-5 xxs:mt-10 flex max-w-screen-2xl flex-col items-center justify-center gap-2 p-12  xs:mt-10 xs:gap-4 xs:p-8 md:gap-6 md:p-12 lg:gap-8 xl:p-20">
        <div className=" flex flex-col gap-2">
          <Logo className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
          <h1 className="text-center text-2xl font-semibold capitalize leading-[3.5rem] xs:text-4xl md:text-5xl md:leading-[4rem] lg:text-6xl lg:leading-[4.5rem] 2xl:text-7xl 2xl:leading-[5rem]">
            Sign in to your account
          </h1>
          <p className="text-center text-base font-medium text-base-content/70 xs:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl">
            Welcome back!
          </p>
        </div>
        <div className="flex w-[90%] flex-col gap-3 xs:gap-6">
          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input
              type="text"
              className="grow placeholder:text-neutral"
              placeholder="Email"
            />
            <Mail className="text-neutral" />
          </label>

          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input type="password" className="grow" placeholder="Password" />
            <Eye className="text-neutral" />
          </label>
          <Link
            to="/"
            className="place-self-end text-base text-base-content/70 hover:text-base-content xs:text-lg lg:text-xl"
          >
            Forgot password?
          </Link>
          <Link to="/" className="btn btn-primary text-lg xl:btn-lg lg:text-xl">
            Sign in
          </Link>
          <div className="flex flex-col flex-nowrap items-center justify-center xs:flex-row xs:gap-2">
            <p className="text-base text-base-content/70 xs:text-lg lg:text-xl">
              Don't have an account?
            </p>
            <Link
              to="/"
              className="link-hover link text-lg font-semibold tracking-wide text-primary xs:text-xl lg:text-2xl"
            >
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
