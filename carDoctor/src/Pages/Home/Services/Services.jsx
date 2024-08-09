import { useState } from "react";
import Heading from "../../../Utlities/Heading";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/services`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="space-y-20">
      <div className="text-center w-2/3 mx-auto space-y-4">
        <Heading
          heading="service"
          subHeading="our service area"
          primaryContent="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        ></Heading>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <button className="custom-btn-base custom-btn-secondary ">More Services</button>
      </div>
    </div>
  );
};

export default Services;
