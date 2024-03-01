import { useSelector } from "react-redux";
import { PlayerHealthBar } from "./PlayerHealthBar";

export function Player({ maxhp }) {
  const energy = useSelector((state) => state.player.energy);
  const shield = useSelector((state) => state.player.shield);
  console.log("player loading");
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0F0",
          position: "absolute",
          left: "0px",
          top: "100px",
        }}
      >
        {energy}
      </div>
      <div style={{ position: "absolute", left: "0px", top: "100px" }}>
        <img src="/Player.gif" />
        <div style={{ display: "flex" }}>
          <div style={{ backgroundColor: "#00F" }}>{shield}</div>
          <PlayerHealthBar maxhp={maxhp} />
        </div>
      </div>
    </div>
  );
}
