export function Backpacktile({ tile }) {
  return (
    <div
      style={{
        border: "1px",
        borderStyle: "solid",
        borderColor: tile === 1 ? "#000" : "#FFF",
        boxSizing: "border-box",
        height: "50px",
        width: "50px",
        backgroundColor: tile === 1 ? "#666" : "#999",
      }}
    ></div>
  );
}
