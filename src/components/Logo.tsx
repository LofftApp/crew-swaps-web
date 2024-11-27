import logo from "../assets/svg/logo.svg";
function Logo() {
  return (
    <div className="flex flex-nowrap gap-2 ml-4 text-xl font-bold btn btn-ghost hover:scale-105 ">
      <img className='h-8 w-8' src={logo} alt="" />
      <p>Crew Swap</p>
    </div>
  );
}

export default Logo;
