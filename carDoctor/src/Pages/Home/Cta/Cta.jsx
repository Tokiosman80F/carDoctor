import React from "react";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";

const Cta = () => {
  const ctaArray = [
    {
      img: <FaClock />,
      subtitle: "We are open monday-friday",
      mainInfo: "7:00 am - 9:00 pm",
    },
    {
      img: <FaPhone />,
      subtitle: "Have a question?",
      mainInfo: "+2546 251 2658",
    },
    {
      img: <FaLocationDot />,
      subtitle: "Need a repair? our address",
      mainInfo: "Liza Street, New York",
    },
  ];

  return (
    <div className="my-20 py-20 rounded-2xl bg-black flex justify-center gap-5">
      {ctaArray.map((ctaContent, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-center items-center gap-5 text-white"
        >
          <div className="text-4xl text-primaryColor">{ctaContent.img}</div>
          <div>
            <p>{ctaContent.subtitle}</p>
            <p className="text-2xl font-bold">{ctaContent.mainInfo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cta;
