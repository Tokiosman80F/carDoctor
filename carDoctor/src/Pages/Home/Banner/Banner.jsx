import banner1 from "../../../../assets/images/banner/1.jpg";
import banner2 from "../../../../assets/images/banner/2.jpg";
import banner3 from "../../../../assets/images/banner/3.jpg";
import banner4 from "../../../../assets/images/banner/4.jpg";
// import banner5 from "../../../../assets/images/banner/5.jpg"
// import banner6 from "../../../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className=" carousel-item relative w-full  ">
          <img src={banner1} className=" w-full  rounded-2xl h-[600px]  " />

          {/* ------text----- */}
          <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0%)] rounded-2xl px-20 pt-20">
            <div className="w-3/6 text-white space-y-10 ">
              <div className="text-6xl font-bold ">
                Affordable price for car services
              </div>
              <p className="text-lg font-normal ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
              <button className="custom-btn-base custom-btn-primary ">Discover More</button>
              <button className="bg-transparent border-white border custom-btn-base">Latest project</button>
              </div>
            </div>
          </div>
          {/* -----btn --- */}
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
            <a href="#slide4" className="btn btn-circle  backdrop-blur-sm bg-white/30 text-white hover:bg-primaryColor">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-primaryColor text-white ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide5" className="carousel-item relative w-full">
    <img
      src={banner5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img
      src={banner6}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
      </div>
    </div>
  );
};

export default Banner;
