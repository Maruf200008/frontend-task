"use client";
import Image from "next/image";
import img1 from "../images/newGame/Img1.png";
import img2 from "../images/newGame/Img2.png";
import img3 from "../images/newGame/Img3.png";
import img4 from "../images/newGame/Img4.png";
import img5 from "../images/newGame/Img5.png";
import img6 from "../images/newGame/Img6.png";
import NewGamingModal from "./NewGamingModal";
export default function NewGamingSection() {
  const imgData = [
    {
      id: 1,
      img: img1,
      title: "MonkeyIslander872",
    },
    {
      id: 2,
      img: img2,
      title: "mean_deal_",
    },
    {
      id: 3,
      img: img3,
      title: "TennisChallenger",
    },
    {
      id: 4,
      img: img4,
      title: "DoozieWoozie",
    },
    {
      id: 5,
      img: img5,
      title: "tired0fbeIngWired",
    },
    {
      id: 6,
      img: img6,
      title: "Greendragon_",
    },
  ];

  return (
    <div className=" my-[100px] ">
      <div className="max-w-screen-xl my-20 text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" md:grid grid-cols-2 w-full space-y-10">
          <div className="space-y-5">
            <h1 className=" font-bold uppercase text-[40px] md:w-[350px] leading-[45px]">
              The New Gaming Web
            </h1>
            <p className=" md:w-[430px] font-light leading-7 text-neutral-300">
              {`At the core of the XBorg Data Graph Protocol lies a dynamic and
          interconnected network of gaming profiles. Each player's profile
          is represented as a unique ERC-721 NFT, complete with metadata
          unique to their gaming journey.`}
            </p>
          </div>

          <div className=" ">
            <div className=" w-full   md:w-[600px] relative">
              <div className="md:grid grid-cols-2 gap-5 space-y-6 md:space-y-0">
                {imgData.map((img) => (
                  <div
                    key={img?.id}
                    className="rounded-full p-[1px] bg-gradient-to-r from-neutral-900 to-neutral-500 cursor-pointer relative"
                  >
                    <div className="group bg-[#080808] rounded-full pl-3 pr-6 py-2 flex items-center gap-5">
                      <div className="rounded-full overflow-hidden">
                        <Image src={img?.img} alt="img1" width={60} />
                        <div className="opacity-0  z-40 group-hover:opacity-100 top-0 ease-in duration-300 absolute left-0">
                          <NewGamingModal modalData={img} />
                        </div>
                      </div>
                      <p className="font-semibold text-transparent bg-gradient-to-r from-neutral-700 to-neutral-200 bg-clip-text">
                        {img?.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
