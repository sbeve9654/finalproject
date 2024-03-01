import { Enemy } from "./Enemy";
import useEnemyLayouts from "../../hooks/useEnemyLayouts";
import { useSelector } from "react-redux";
export function Enemies() {
  const id = useSelector((state) => state.enemy.id);
  const [enemies, loading] = useEnemyLayouts(id);

  if (loading) return;
  const e = enemies[0].enemies;

  return e.map((enemy, id) => (
    <Enemy key={`enemy${id}`} enemy={enemy} id={id} />
  ));
}
