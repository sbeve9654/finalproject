import { Myequipment } from "./Myequipment";

export function Myequipments({ e }) {
  console.log(e);
  return e.map((item, id) => (
    <Myequipment key={`UserEquipment${id}`} item={item} />
  ));
}
