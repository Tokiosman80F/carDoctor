import Parts from "../../../../assets/images/about_us/parts.jpg";
import Person from "../../../../assets/images/about_us/person.jpg";
import Heading from "../../../Utlities/Heading";
const AboutUs = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="w-4/6 relative  h-[70vh]">
          <img src={Person} className=" w-5/6  rounded-lg shadow-2xl" />
          <img
            src={Parts}
            className=" w-1/2 bottom-8 right-0 border-white border-8 absolute rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/3 space-y-5 ">
          <Heading
            heading="About Us"
            subHeading="We are qualified & of experience in this field"
            primaryContent="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable."
            secondaryContent="The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable."
          ></Heading>

          <button className="custom-btn-base custom-btn-primary">
            get more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
