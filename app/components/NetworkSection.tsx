import Image from "next/image";
import iconImg from "../images/User7.png";
import iconImg2 from "../images/User8.png";
export default function NetworkSection() {
  return (
    <div className=" network-container">
      <div className="max-w-screen-xl my-20 text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" w-full flex items-center justify-center flex-col space-y-5 ">
          <h1 className=" uppercase text-center md:text-[64px] md:w-[60%] font-bold leading-[70px]">
            The value network of gaming
          </h1>
          <p className=" md:w-[40%] text-center text-[#CACACE] text-sm font-light pb-16">
            The fundamental protocol that allows anyone to create gaming
            applications built on top of player identities.
          </p>

          <div className=" md:grid grid-cols-2 gap-7 w-full md:w-[68%] space-y-8">
            <div className=" bg-[#080808] p-10 space-y-10 border-2 border-[#343434] rounded-lg">
              <div className=" space-y-3">
                <h1 className=" text-[26px]">Gaming social layer</h1>
                <p className=" text-[14px] font-light">
                  Gamers take control of their data.
                </p>
              </div>
              <Image src={iconImg} alt="iconImg" width={100} />
            </div>
            <div className=" bg-[#080808] p-10 space-y-10 border-2 border-[#343434] rounded-lg">
              <div className=" space-y-3">
                <h1 className=" text-[24px]">Build next-gen fat dapps</h1>
                <p className=" text-[14px] font-light">
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
