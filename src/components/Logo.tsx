function Logo() {
  return (
    <div className="btn btn-ghost flex flex-nowrap gap-2 text-xl font-bold text-base-content hover:scale-105 lg:text-2xl">
      <svg
        className="h-8 w-8 lg:h-12 lg:w-12"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left shape with theme-based color */}
        <path
          d="M -10,0 Q 20,15 50,30 Q 20,55 -10,100 Z"
          fill="var(--color-secondary)"
        />

        {/* Right shape with theme-based color */}
        <path
          d="M 110,0 Q 80,15 50,30 Q 80,55 110,100 Z"
          fill="var(--color-primary)"
        />
      </svg>

      <span>Crew Swap</span>
    </div>
  );
}

export default Logo;
