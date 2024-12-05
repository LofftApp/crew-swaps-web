import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";
import { Grip } from "lucide-react";

function Navbar({ type }: { type: "landing" | "app" }) {
  return (
    <div className="navbar bg-base-100 p-3">
      <div className="navbar-start">
        <Link to="/" className="flex">
          <Logo text />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      {type === "app" && (
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <span>
            <Grip size={28} />
          </span>
        </label>
      )}

      <div className="navbar-end items-center gap-4">
        <ThemeToggle />
        {type === "landing" && (
          <Link to="signin" className="btn btn-primary px-6 text-lg lg:text-xl">
            Sign in
          </Link>
        )}
        {type === "app" && <Avatar />}
      </div>
    </div>
  );
}

export default Navbar;