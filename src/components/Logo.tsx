import { cn } from "../utils/cn";

function Logo({ text, className }: { text?: boolean; className?: string }) {
  return (
    <div className="flex transform flex-nowrap items-center gap-2 text-xl font-bold text-base-content duration-200 ease-in-out hover:scale-105 md:text-2xl lg:gap-3 lg:text-2xl xl:text-3xl px-1">
      <svg
        className={cn("h-8 w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14", className)}
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

      {text && <span>Crew Swaps</span>}
    </div>
  );
}

export default Logo;
