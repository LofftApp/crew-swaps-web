import { Grip } from "lucide-react";
import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function NavbarLandingPage() {
  return (
    <div className="navbar bg-base-100 p-3">
      <div className="navbar-start">
        <Link to="/" className="flex">
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end gap-4">
        <ThemeToggle />
        <Link to="/" className="btn btn-primary px-6 text-lg lg:text-xl">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default NavbarLandingPage;
