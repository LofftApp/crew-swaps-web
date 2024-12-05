import { Link } from "react-router";
import Avatar from "./Avatar";
import { LogOut, Settings } from "lucide-react";

function AvatarDropdown() {
  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} role="button" className="m-1">
        <Avatar />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
      >
        <li className="text-base">
          <Link to="/settings">
            <span>
              <Settings />
            </span>
            Settings
          </Link>
        </li>
        <li className="text-base">
          <Link to="/logout">
            <span>
              <LogOut />
            </span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AvatarDropdown;
