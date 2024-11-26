import bgHomepage from "../assets/svg/bg-homepage.svg";

function BgImage() {
  return (
    <div
      className="top-50 absolute left-0 z-0 h-52 w-52 flex-col bg-center bg-no-repeat"
      data-testid="bg-image"
      style={{
        backgroundImage: `url(${bgHomepage})`,
      }}
    ></div>
  );
}

export default BgImage;
