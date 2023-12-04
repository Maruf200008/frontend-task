export default function NewGamingSection() {
  return (
    <div className=" my-[80px]">
      <div className="max-w-screen-xl my-20 text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" grid grid-cols-2 w-full">
          <div className="space-y-5">
            <h1 className=" font-bold uppercase text-[40px] w-[350px] leading-[45px]">
              The New Gaming Web
            </h1>
            <p className=" w-[430px] font-light leading-7 text-neutral-300">
              {`At the core of the XBorg Data Graph Protocol lies a dynamic and
              interconnected network of gaming profiles. Each player's profile
              is represented as a unique ERC-721 NFT, complete with metadata
              unique to their gaming journey.`}
            </p>
          </div>
          <div>
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
  );
}
