import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function NewGamingModal({ modalData }) {
  const { img, title } = modalData;
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
    <div className=" backdrop-blur-sm right-[100px]  z-50 w-[600px]  absolute bg-[#090909]/80  border border-[#343434]  rounded-2xl p-5">
      <div>
        <div className=" w-[300px] space-y-5 ">
          <div className=" bg-primary/10 border border-primary rounded-full pl-3 pr-6 py-2 flex items-center gap-5  ">
            <div className=" rounded-full overflow-hidden">
              <Image src={img} alt="img1" width={60} />
            </div>
            <p className=" font-semibold text-primary">{title}</p>
          </div>

          <div className="w-[500px] ">
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
