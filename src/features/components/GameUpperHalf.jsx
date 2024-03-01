import { replaceUpper } from "../state/upper/upperSlice";
import { replaceItem } from "../state/edit/editSlice";
import { Backpack } from "./Backpack";

import { Myequipments } from "./Myequipments";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "./Edit";

export function GameUpperHalf({ b, e }) {
  const dispatch = useDispatch();
  const scene = useSelector((state) => state.upper.scene);
  console.log("gameupperhalf:", scene);

  function onEditClick() {
    dispatch(replaceUpper("edit"));
    dispatch(replaceItem(e.length - 1));
  }
  return (
    <div style={{ width: "100vw", height: "50%" }}>
      <div style={{ width: "350px", margin: "auto", position: "relative" }}>
        <div
          style={{
            display: scene === "backpack" ? "block" : "none",
          }}
        >
          <Backpack b={b} />
          <Myequipments e={e} />
        </div>
        <div
          style={{
            display: scene === "edit" ? "block" : "none",
          }}
        >
          <Edit b={b} e={e} />
        </div>
        <button
          style={{ display: scene === "edit" ? "none" : "block" }}
          onClick={onEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
