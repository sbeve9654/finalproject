import { useDispatch, useSelector } from "react-redux";
import { Enemies } from "./Enemies";
import { Player } from "./Player";
import { replaceEnemy } from "../state/enemy/enemySlice";
import {
  replacePlayerEnergy,
  reducePlayerhp,
  replacePlayerShield,
  replaceDamageTaken,
  increaseLevel,
} from "../state/player/playerSlice";
import useUpdateFile from "../../hooks/useUpdateFile";
export function GameLowerHalf({ m }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.enemy.id);
  const damagetaken = useSelector((state) => state.player.damagetaken);
  const shield = useSelector((state) => state.player.shield);
  const file = useSelector((state) => state.file.file);
  const health = useSelector((state) => state.player.hp);
  const level = useSelector((state) => state.player.level);
  const hpreduced = damagetaken - shield;
  const [updateFile, updated, loading, error] = useUpdateFile();
  function onNextClick() {
    dispatch(replaceDamageTaken());
    dispatch(replaceEnemy(Math.ceil(Math.random() * 3)));
    dispatch(replacePlayerEnergy(3));
    dispatch(replacePlayerShield(0));
    dispatch(increaseLevel());
  }
  function onNextTurnClick() {
    dispatch(replacePlayerEnergy(3));
    dispatch(reducePlayerhp(hpreduced));
    dispatch(replacePlayerShield(0));
    dispatch(replaceDamageTaken());
  }
  function onSaveClick(file, health, level) {
    /*updateFile({
      variables: {
        id: file,
        health: health,
        level: level,
      },
    });*/
    console.log(file);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "50%",
        backgroundImage: "url('/Background.png')",
      }}
    >
      <div style={{ width: "80%", margin: "auto", position: "relative" }}>
        <button
          onClick={onNextClick}
          style={{ display: id === 0 ? "block" : "none" }}
        >
          Next
        </button>
        <button
          onClick={onSaveClick(file, health, level)}
          style={{ display: id === 0 ? "block" : "none" }}
        >
          Save Game
        </button>
        <button
          onClick={onNextTurnClick}
          style={{ display: id === 0 ? "none" : "block" }}
        >
          Next turn
        </button>
        <Player maxhp={m} />
        <div>
          <div style={{ backgroundColor: "#F00", width: "100px" }}>
            {damagetaken}
          </div>
          <Enemies />
        </div>
      </div>
    </div>
  );
}
