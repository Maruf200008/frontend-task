import Image from "next/image";
import img1 from "../images/newGame/Img1.png";
export default function NewGamingModal() {
  return (
    <div className=" absolute bg-[#090909]/80 w-full border border-[#343434] h-full rounded-2xl p-7">
      <div>
        <div className="">
          <div className=" bg-primary/10 border border-primary rounded-full pl-3 pr-6 py-2 flex items-center gap-5  ">
            <div className=" rounded-full overflow-hidden">
              <Image src={img1} alt="img1" width={60} />
            </div>
            <p className=" font-semibold text-primary">TennisChallenger</p>
          </div>
        </div>
      </div>
    </div>
  );
}
