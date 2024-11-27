import logo from "../assets/svg/logo.svg";
function Logo() {
  return (
    <div className="btn btn-ghost flex flex-nowrap gap-2 text-xl font-bold text-base-content hover:scale-105">
      <img className="h-8 w-8" src={logo} alt="" />

      <span>Crew Swap</span>
    </div>
  );
}

export default Logo;
