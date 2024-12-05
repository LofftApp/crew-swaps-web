import { Outlet } from "react-router";

import SidebarApp from "./SidebarApp";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen transform transition-all ease-in-out">
      <Navbar type="app" />
      <SidebarApp>
        <Outlet />
      </SidebarApp>
      {/* footer */}
    </div>
  );
}

export default AppLayout;
