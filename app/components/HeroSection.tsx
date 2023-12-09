import Image from "next/image";
import grouX from "../images/GroupX.png";
import Pill from "../images/Pill.png";
import downArrow from "../images/Vector.svg";
import card3 from "../images/card-3.png";
import xIcon from "../images/crossIcon.png";
import xBorg2 from "../images/xBorg2.png";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="max-w-screen-xl text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" flex items-center justify-between w-full md:hidden">
          <div>
            <Image src={xIcon} alt="xIcon" width={50} />
          </div>
          <div>
            <div className=" rounded-lg p-[2px] bg-gradient-to-tr from-[#000000] via-primary to-[#000000]">
              <div className=" bg-[#080808] rounded-lg px-5 py-3  ">
                <p className=" text-white text-[14px] ">Explore Apps</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:grid grid-cols-2 gap-5 w-full mt-[200px] mb-[100px] space-y-20 md:space-y-16 ">
          <div className=" space-y-5">
            <p className=" uppercase text-primary text-[12px] sm:text-base ">
              Lorem ipsum dolor
            </p>
            <h1 className=" hidden md:block md:text-[60px] text-[30px] leading-[40px] md:leading-[65px] font-bold uppercase">
              Game-changing infrastructure
            </h1>
            <h1 className="  md:hidden md:text-[60px] text-[40px] leading-[45px] md:leading-[65px] font-bold uppercase">
              Empowering players & fans
            </h1>
            <p className=" hidden md:block text-[12px]  sm:text-[14px] w-full sm:leading-6 md:w-[80%] text-neutral-300 pb-10 font-light">
              A decentralised, non-custodial social graph, empowering players to
              take full ownership of their gaming identities and enabling
              developers to build next-gen applications.{" "}
            </p>
            <p className=" md:hidden text-[12px]  sm:text-[14px] w-full sm:leading-6 md:w-[80%] text-neutral-300 pb-10 font-light">
              We’re a global team on a mission to build the next-generation of
              gaming, where players and fans experience ownership, and
              governance and are rewarded for their contributions.
            </p>
            <div>
              <button className=" btn-style tracking-wide bg-primary px-8 py-3 rounded-md">
                Join Discord
              </button>
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
                  <p className=" text-sm">User id:</p>
                  <h1 className=" text-xl">XBorg001</h1>
                </div>
                <div className=" flex items-center justify-center flex-col gap-y-4">
                  <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                    <div className=" bg-[#080808] rounded-full p-3">
                      <Image src={Pill} alt="Pill" width={25} />
                    </div>
                  </div>
                  <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                    <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                      <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[14px] ">
                        Soulbound Launchpad
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center gap-5">
                    <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                      <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                        <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[14px] ">
                          Soulbound Launchpad
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-full p-[2px] bg-gradient-to-r from-neutral-500 to-neutral-900">
                      <div className=" bg-[#080808] rounded-full px-7 py-3  ">
                        <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-[14px] ">
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
        <div className=" flex items-center justify-center w-full mt-20">
          <div className=" flex items-center flex-col">
            <p className=" scroll-style text-lg ">Scroll down</p>
            <div>
              <Image src={downArrow} alt="downArrow" width={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
