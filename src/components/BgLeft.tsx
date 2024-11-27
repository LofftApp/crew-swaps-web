import bgLeft from "../assets/svg/bg-left.svg";
import { cn } from "../utils/cn";

function BgLeft({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `absolute z-0 h-52 w-52 flex-col bg-center bg-no-repeat`,
        className,
      )}
      data-testid="bg-left"
      style={{
        backgroundImage: `url(${bgLeft})`,
      }}
    ></div>
  );
}

export default BgLeft;
