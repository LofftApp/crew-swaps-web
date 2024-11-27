import bgImage from "../assets/svg/bg-image.svg";
import { cn } from "../utils/cn";

function BgImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `absolute z-0 h-52 w-52 flex-col bg-center bg-no-repeat`,
        className,
      )}
      data-testid="bg-image"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
}

export default BgImage;
