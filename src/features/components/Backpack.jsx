import { Backpackrow } from "./Backpackrow";

export function Backpack({ b }) {
  const backpack = JSON.parse(b);
  const row = ["0", "1", "2", "3", "4"];
  return row.map((row) => (
    <Backpackrow key={`backpackrow${row}`} row={backpack[row]} />
  ));
}
