import { Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

function FooterLandingPage() {
  return (
    <footer className="footer footer-center rounded bg-base-100 p-10 text-lg text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <a className="link-hover link">How to use</a>
        <a className="link-hover link">About us</a>
        <a className="link-hover link">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <Github />
          </Link>
          <Link to="/">
            <Linkedin />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-neutral">
          Copyright © {new Date().getFullYear()} - Crew Swap
        </p>
      </aside>
    </footer>
  );
}

export default FooterLandingPage;
