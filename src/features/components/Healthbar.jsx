import { useSelector } from "react-redux";
export function HealthBar({ max, id }) {
  const current = useSelector((state) => state.enemy.enemyhp[id]);
  const length = (current / max) * 100;

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
        {current}/{max}
      </div>
    </div>
  );
}
