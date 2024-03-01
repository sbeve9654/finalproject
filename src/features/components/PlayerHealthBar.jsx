import { useSelector } from "react-redux";

export function PlayerHealthBar({ maxhp }) {
  const current = useSelector((state) => state.player.hp);
  const length = (current / maxhp) * 100;

  console.log(maxhp);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        width: "100px",
        height: "25px",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#F00",
          left: "0px",
          width: `${length}px`,
          height: "25px",
        }}
      />
      <div style={{ position: "absolute", right: "0px", height: "25px" }}>
        {current}/{maxhp}
      </div>
    </div>
  );
}
