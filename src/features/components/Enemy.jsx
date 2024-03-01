import { HealthBar } from "./Healthbar";
import useEnemy from "../../hooks/useEnemy";
import { useDispatch, useSelector } from "react-redux";
import { replaceEnemytarget } from "../state/enemy/enemySlice";
export function Enemy({ enemy, id }) {
  const dispatch = useDispatch();
  console.log("id:", id);
  const [enemyinfo, loading] = useEnemy(enemy, id);
  const rightvalue = id * 110;
  const currenthealth = useSelector((state) => state.enemy.enemyhp[id]);
  function enemyClick() {
    dispatch(replaceEnemytarget(id));
  }

  if (loading) return;

  const maxhealth = enemyinfo[0].health;
  return (
    <div
      style={{
        width: "100px",
        height: "140px",
        position: "absolute",
        top: "156px",
        right: `${rightvalue}px`,
        display: currenthealth <= 0 ? "none" : "block",
      }}
    >
      <button
        onClick={enemyClick}
        style={{
          width: "100px",
          height: "100px",
          background: `url("/${enemy}.png") no-repeat`,
          backgroundSize: "contain",
        }}
      ></button>
      <HealthBar max={maxhealth} id={id} />
    </div>
  );
}
