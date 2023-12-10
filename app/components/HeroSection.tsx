import Image from "next/image";
import grouX from "../images/GroupX.png";
import Pill from "../images/Pill.png";
import downArrow from "../images/Vector.svg";
import card3 from "../images/card-3.png";
import crossImg from "../images/cross.png";
import xBorg2 from "../images/xBorg2.png";

export default function HeroSection() {
  return (
    <div className="max-w-screen-xl text-white flex flex-wrap items-center justify-between mx-auto p-4">
      <div className=" lg:hidden flex items-center justify-between w-full">
        <div>
          <Image src={crossImg} alt="crossImg" width={50} />
        </div>
        <div>
          <div className=" rounded-full p-[1px] bg-gradient-to-tl from-black via-primary  to-black">
            <div className=" bg-[#080808] rounded-full px-5 py-3  ">
              <p className="  text-[12px]  sm:text-[18px] ">Explore Apps</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:grid grid-cols-2 gap-10 w-full mt-[200px] mb-[100px] space-y-16 lg:space-y-0  ">
        <div className=" space-y-5">
          <p className=" uppercase text-primary sm:text-center lg:text-left ">
            Lorem ipsum dolor
          </p>
          <h1 className=" hidden sm:block sm:text-center lg:text-left text-[60px] lg:text-[50px] leading-[65px] font-bold uppercase">
            Game-changing infrastructure
          </h1>
          <h1 className=" sm:hidden text-[40px] w-[80%] leading-[45px] font-bold uppercase">
            Empowering players & fans
          </h1>
          <p className=" hidden sm:block sm:text-center lg:text-left  text-[14px] sm:text-[16px]  leading-6 w-[80%] sm:w-[80%] mx-auto lg:mx-0  text-neutral-300 pb-10 font-light">
            A decentralised, non-custodial social graph, empowering players to
            take full ownership of their gaming identities and enabling
            developers to build next-gen applications.{" "}
          </p>
          <p className=" sm:hidden  text-[12px] leading-4 w-[90%]  text-neutral-300 pb-10 font-light">
            We’re a global team on a mission to build the next-generation of
            gaming, where players and fans experience ownership, and governance
            and are rewarded for their contributions.
          </p>
          <div className=" relative">
            <button className=" sm:mx-auto lg:mx-0 flex items-center justify-center btn-style tracking-wide bg-primary px-5 sm:px-8 py-3 rounded-md hover:bg-transparent hover:border hover:border-primary ease-in duration-300 border border-primary">
              Join Discord
            </button>
            <div className=" a"></div>
          </div>
        </div>
        <div className=" mt-[-80px] flex items-center justify-center relative">
          <Image src={grouX} alt="grouX" />
          <Image src={xBorg2} alt="xBorg2" className=" absolute mt-[-90px]" />
          <div className=" absolute flex items-center justify-center mt-[150px] ">
            <div className=" space-y-7">
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={card3}
                  alt="card3"
                  width={80}
                  className=" rounded-full"
                />
                <p className=" text-sm sm:text-[16px]">User id:</p>
                <h1 className=" text-xl sm:text-[32px]">XBorg001</h1>
              </div>
              <div className=" flex items-center justify-center flex-col gap-y-4">
                <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                  <div className=" bg-[#080808] rounded-full p-3">
                    <Image src={Pill} alt="Pill" width={25} />
                  </div>
                </div>
                <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                  <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                    <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[12px] sm:text-[18px] lg:text-[16px] ">
                      Soulbound Launchpad
                    </p>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-5">
                  <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                    <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                      <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[12px] sm:text-[18px] lg:text-[16px] ">
                        Soulbound Launchpad
                      </p>
                    </div>
                  </div>
                  <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                    <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                      <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[12px] sm:text-[18px] lg:text-[16px] ">
                        Soulbound Launchpad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center w-full mt-16">
        <div className=" flex items-center flex-col">
          <p className=" scroll-style text-lg lg:text-xl ">Scroll down</p>
          <div className="animate-bounce">
            <Image src={downArrow} alt="downArrow" width={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
