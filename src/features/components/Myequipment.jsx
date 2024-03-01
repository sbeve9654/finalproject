import useEquipments from "../../hooks/useEquipments";
import { useDispatch, useSelector } from "react-redux";
import { replaceEnemyhp } from "../state/enemy/enemySlice";
import {
  reducePlayerEnergy,
  increasePlayerShield,
} from "../state/player/playerSlice";

export function Myequipment({ item }) {
  const dispatch = useDispatch();
  const target = useSelector((state) => state.enemy.target);
  const current = useSelector((state) => state.enemy.enemyhp[target]);
  const energy = useSelector((state) => state.player.energy);
  function index(info) {
    const category = info.category[0];
    if (category === "melee") {
      damage(info.values[0], target);
    }
    if (category === "shield") {
      shield(info.values[0]);
    }
  }
  function shield(value) {
    dispatch(increasePlayerShield(value));
    dispatch(reducePlayerEnergy(1));
  }
  function damage(value, target) {
    if (current < 0) {
      return;
    }
    const changehp = {
      id: target,
      hp: current - value,
    };
    dispatch(replaceEnemyhp(changehp));
    dispatch(reducePlayerEnergy(1));
  }

  const [equip, loading] = useEquipments(item.name);

  if (loading) return;
  const leftvalue = item.itemxpos * 50;
  const topvalue = item.itemypos * 50;
  const widthvalue =
    item.rotation % 2 === 0
      ? equip[0].dimension[0] * 50
      : equip[0].dimension[1] * 50;
  const heightvalue =
    item.rotation % 2 === 0
      ? equip[0].dimension[1] * 50
      : equip[0].dimension[0] * 50;
  const rotatevalue = item.rotation * 90;

  return (
    <button
      onClick={() => index(equip[0])}
      style={{
        rotate: `${rotatevalue}deg`,
        position: "absolute",
        top: `${topvalue}px`,
        left: `${leftvalue}px`,
        width: `${widthvalue}px`,
        height: `${heightvalue}px`,
        background: `url("/${item.name}.png") no-repeat`,
        backgroundSize: "100%",
      }}
      disabled={energy > 0 ? false : true}
    ></button>
  );
}
