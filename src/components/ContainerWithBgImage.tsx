import BgImage from "./BgImage";
type ContainerWithBgImageProps = {
  className?: string;
  children: React.ReactNode;
  navbar?: React.ReactNode;
};

function ContainerWithBgImage({
  className,
  children,
  navbar,
}: ContainerWithBgImageProps) {
  return (
    <div className="relative mx-auto flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {navbar}
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 -translate-y-[60%] translate-x-1/3 rotate-180 transform xs:-translate-y-[72%] md:-translate-y-[76%] md:translate-x-1/4" />
      {children}
    </div>
  );
}

export default ContainerWithBgImage;
