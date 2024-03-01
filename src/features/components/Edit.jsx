import { useDispatch, useSelector } from "react-redux";
import { Backpack } from "./Backpack";
import useUpdateMyEquipments from "../../hooks/useUpdateMyEquipments";
import { reduceItem, increaseItem } from "../state/edit/editSlice";
import { replaceUpper } from "../state/upper/upperSlice";

export function Edit({ b, e }) {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.edit.item);
  const [updateEquipments, updated, loading, error] = useUpdateMyEquipments();
  console.log(item);
  function onPlaceClick(x, y, r) {
    event.preventDefault();
    updateEquipments({
      variables: {
        updatemyequipmentsId: Number(e[item].id),
        itemxpos: Number(x),
        itemypos: Number(y),
        rotation: Number(r),
      },
    });
    dispatch(replaceUpper("backpack"));
  }
  function onLeftClick() {
    console.log(e.length);
    dispatch(reduceItem());
  }
  function onRightClick() {
    dispatch(increaseItem(e.length));
  }
  return (
    <div style={{ display: "flex" }}>
      <div>
        <form
          onSubmit={() =>
            onPlaceClick(itemxpos.value, itemypos.value, rotation.value)
          }
        >
          top left x-position:
          <input id="itemxpos"></input>
          top left y-position:
          <input id="itemypos"></input>
          rotation:
          <input id="rotation"></input>
          <input type="submit" value="Place"></input>
        </form>
      </div>
      <div style={{ display: "block" }}>
        <Backpack b={b} />
      </div>
      <div>
        <img width="150px" height="150px" src={`${e[item].name}.png`} />
        <div style={{ display: "flex" }}>
          <button onClick={onLeftClick}>{"<"}</button>
          <button onClick={onRightClick}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
