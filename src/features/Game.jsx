import useFiles from "../hooks/useFiles";
import { useSelector } from "react-redux";
import { GameUpperHalf } from "./components/GameUpperHalf";
import { GameLowerHalf } from "./components/GameLowerHalf";
import { useDispatch } from "react-redux";
import { replaceLevel, replacePlayerhp } from "./state/player/playerSlice";

export function Game() {
  const dispatch = useDispatch();
  const fileid = useSelector((state) => state.file.file)
    ? useSelector((state) => state.file.file)
    : parseInt(window.localStorage.getItem("fileid"));
  const [file, loading] = useFiles(fileid);

  if (loading) return;
  console.log(file);
  dispatch(replacePlayerhp(file[0].health));
  dispatch(replaceLevel(file[0].level));
  return (
    <div style={{ width: "auto", height: "100vh" }}>
      <GameUpperHalf b={file[0].backpack} e={file[0].equipment} />
      <GameLowerHalf m={file[0].maxhealth} />
    </div>
  );
}
