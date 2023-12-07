import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function NewGamingModal({ modalData }) {
  const codeString = `player_metadata = {
    "player _name": "JohnDoe123",
    "gaming_platform": "PC",
    "game_level": 25,
    "achievements": ["Master of the Arena", "Legendary Explorer"],
    "total_score": 2000,
    "preferred_game_mode": "Team Deathmatch",
    "collected items": {
        "weapon": "Legendary Sword",
        "armor": "Epic Plate Armor",
        "pet": "Fire Dragon"
    }
}`;

  return (
    <div className="backdrop-blur-md  z-50 w-[450px]   bg-[#090909]/70  border border-[#343434]  rounded-2xl p-5">
      <div>
        <div className=" w-[300px] space-y-5 ">
          <div className=" bg-primary/10 border border-primary rounded-full pl-3 pr-6 py-2 flex items-center gap-5  ">
            <div className=" rounded-full overflow-hidden">
              <Image src={modalData?.img} alt="img1" width={60} />
            </div>
            <p className=" font-semibold text-primary">{modalData?.title}</p>
          </div>

          <div className=" w-[400px] text-sm ">
            <SyntaxHighlighter
              language="javascript"
              className={"syntax-highlighter"}
              wrapLongLines
              style={atomDark}
              customStyle={{
                backgroundColor: "transparent",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
