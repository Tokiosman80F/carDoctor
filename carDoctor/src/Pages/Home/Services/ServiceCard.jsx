import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="border card  w-96 shadow-2xl ">
      <figure className="p-5">
        <img
          src={service.img}
          alt="Shoes"
          className="rounded-xl h-[200px] object-contain"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-[25px] text-[#444444] font-bold">
          {service.title}
        </h2>
        <div className="card-actions items-center">
          <p className="text-primaryColor font-semibold text-xl">
            Price : ${service.price}
          </p>
          <Link
            to={`/book/${service._id}`}
            className="text-primaryColor hover:text-white hover:bg-primaryColor p-2 border-2 rounded-full transition ease-in-out delay-150 duration-200  "
          >
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
