import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";

import img1 from "../images/newGame/Img1.png";

export default function NewGamingModal() {
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
    <div className=" z-40 w-[600px]  absolute bg-[#090909]/80  border border-[#343434]  rounded-2xl p-5">
      <div>
        <div className=" w-[350px] space-y-5">
          <div className=" bg-primary/10 border border-primary rounded-full pl-3 pr-6 py-2 flex items-center gap-5  ">
            <div className=" rounded-full overflow-hidden">
              <Image src={img1} alt="img1" width={60} />
            </div>
            <p className=" font-semibold text-primary">TennisChallenger</p>
          </div>

          <div>
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                backgroundColor: "transparent",
                width: "570px",
                padding: "-10px",
                color: "#EB3A4A",
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
