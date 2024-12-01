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
      <BgImage className="2xs:translate-y-[270%] 3xs:translate-y-[272%] bottom-0 right-0 top-0 translate-x-1/3 translate-y-[275%] rotate-180 transform xs:translate-y-[222%] md:translate-x-1/4 md:translate-y-[235%] lg:translate-y-[247%]" />
      {children}
    </div>
  );
}

export default ContainerWithBgImage;
