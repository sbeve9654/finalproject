import { Backpacktile } from "./Backpacktile";

export function Backpackrow({ row }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {row.map((item, id) => (
        <Backpacktile key={`tile${row}${id}`} tile={item} />
      ))}
    </div>
  );
}
