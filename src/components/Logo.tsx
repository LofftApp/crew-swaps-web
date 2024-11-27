import logo from "../assets/svg/logo.svg";
function Logo() {
  return (
    <div className="flex flex-nowrap gap-2 text-xl text-base-content font-bold btn btn-ghost hover:scale-105">
      <img className='h-8 w-8' src={logo} alt="" />

      <span>Crew Swap</span>
    </div>
  );
}

export default Logo;
