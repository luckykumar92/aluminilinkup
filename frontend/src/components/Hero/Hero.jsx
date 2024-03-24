import React from "react";
import { ArrowUp, Laugh, Smartphone, UsersRound } from "lucide-react";
import bgImage from "@/assets/image/main_photo.jpg";
import connectImg from "@/assets/icons/connect.svg";
import growImg from "@/assets/icons/grow.svg";
import succeedImg from "@/assets/icons/success.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[100vh] max-[480px]:h-full bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        <div className="relative text-center" data-aos="fade-up">
          <div
            className="flex flex-row justify-center "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="md:w-1/2 lg:w-2/3 text-white">
              <h1
                className="text-6xl max-[767px]:mt-8 max-[767px]:text-4xl font-bold "
                data-aos="fade-up"
              >
                your bridge to the Network
              </h1>
              <h2 className="ml-3 text-2xl max-[480px]:text-xl mt-3">
                Aluminilinkup connects you to experienced professionals,
                unlocking career possibilities.
              </h2>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div
            className="md:w-3/4 mx-auto max-[767px]:mx-2 max-[767px]:py-8 md:pt-16"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#003566]">
                <span className="flex text-[#white] place-content-center mb-3">
                  <img src={connectImg} className=" w-12 " alt="" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#003566]">
                    <div>Connect</div>
                  </span>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#003566]">
                <span className="flex text-[#003566] place-content-center mb-3">
                  <img src={growImg} className=" w-12 " alt="" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#003566] hover:border-[#003566]">
                    <div>Grow</div>
                  </span>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#003566] ">
                <span className="flex text-[#003566] place-content-center mb-3">
                  <img src={succeedImg} className=" w-12 " alt="" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#003566] hover:border-[#003566]">
                    <div>Succeed</div>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
