import Image from "next/image";
import iconImg from "../images/User7.png";
import iconImg2 from "../images/User8.png";
export default function NetworkSection() {
  return (
    <div className=" network-container">
      <div className="max-w-screen-xl my-20 text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" w-full flex items-center justify-center flex-col space-y-5 ">
          <h1 className=" uppercase sm:text-center text-right text-[35px] leading-[40px] sm:text-[40px]  sm:w-[80%] md:w-[70%] lg:text-[60px] font-bold sm:leading-[50px] lg:leading-[70px] xl:text-[70px]">
            The value network of gaming
          </h1>
          <p className=" sm:w-[80%] md:w-[70%] text-right sm:text-center text-[#CACACE] text-sm sm:text-base font-light pb-16 lg:text-[20px] lg:w-[60%]">
            The fundamental protocol that allows anyone to create gaming
            applications built on top of player identities.
          </p>

          <div className=" md:grid grid-cols-2 gap-7 sm:w-[68%] md:w-[90%]  space-y-10 md:space-y-0">
            <div className=" bg-[#080808] p-10 space-y-10 border-2 border-[#343434] rounded-lg">
              <div className=" space-y-3">
                <h1 className=" text-[24px] lg:text-[30px] ">
                  Gaming social layer
                </h1>
                <p className=" text-[14px] md:text-[16px] lg:text-[18px] font-light ">
                  Gamers take control of their data.
                </p>
              </div>
              <Image src={iconImg} alt="iconImg" width={100} />
            </div>
            <div className=" bg-[#080808] p-10 space-y-10 border-2 border-[#343434] rounded-lg">
              <div className=" space-y-3">
                <h1 className=" text-[24px] lg:text-[30px]">
                  Build next-gen fat dapps
                </h1>
                <p className=" text-[14px] md:text-[16px] font-light lg:text-[18px]">
                  Plug any apps on top of the gaming social layer.
                </p>
              </div>
              <Image src={iconImg2} alt="iconImg2" width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
