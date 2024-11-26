import { cn } from "../utils/cn";
import line1 from "../assets/svg/line1.svg";

function Line1({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `absolute z-0 h-52 w-52 flex-col bg-center bg-no-repeat`,
        className,
      )}
      data-testid="bg-image"
      style={{
        backgroundImage: `url(${line1})`,
      }}
    ></div>
  );
}

export default Line1;
