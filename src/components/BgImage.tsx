import bgHomepage from "../assets/svg/bg-homepage.svg";

function BgImage() {
  return (
    <div
      className="h-52 w-52 flex-col bg-center bg-no-repeat absolute top-50 left-0 z-0"
      style={{
        backgroundImage: `url(${bgHomepage})`,
      }}
    ></div>
  );
}

export default BgImage;
