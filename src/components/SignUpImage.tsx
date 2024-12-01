import image2 from "../assets/illustration/illustration-2.png";

function SignInImage() {
  return (
    <div className="hidden p-0 text-center text-base text-base-content/70 xs:text-lg md:p-12 lg:block xl:p-12">
      <img
        src={image2}
        alt="signup-image"
        data-testid="signup-image"
        className="h-[600px] w-[500px] object-cover object-center 2xl:h-[700px] 2xl:w-[600px]"
      />
    </div>
  );
}

export default SignInImage;
