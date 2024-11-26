import bgRight from "../assets/svg/bg-right.svg";
import { cn } from "../utils/cn";

function BgRight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `absolute z-0 h-52 w-52 flex-col bg-center bg-no-repeat`,
        className,
      )}
      data-testid="bg-right"
      style={{
        backgroundImage: `url(${bgRight})`,
      }}
    ></div>
  );
}

export default BgRight;
