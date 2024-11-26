import bgHomepage from "../assets/svg/bg-homepage.svg";
import { cn } from "../utils/cn";

function BgImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `absolute left-0 z-0 h-52 w-52 flex-col bg-center bg-no-repeat`,
        className,
      )}
      data-testid="bg-image"
      style={{
        backgroundImage: `url(${bgHomepage})`,
      }}
    ></div>
  );
}

export default BgImage;
