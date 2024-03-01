import { xddshrug } from "../../assets/index";
import { useDispatch } from "react-redux";
import { replaceFile } from "../state/file/fileSlice";
import { useNavigate } from "react-router-dom";

export default function FileButton({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onButtonClick() {
    dispatch(replaceFile(parseInt(item.id)));
    window.localStorage.setItem("fileid", item.id);
    navigate("/game");
  }
  return (
    <button onClick={onButtonClick} style={{ width: "500px", height: "200px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <img src={xddshrug} style={{ width: "200px" }} />
        </div>
        <div style={{ display: "block" }}>
          {`Level: ${item.level}  Health: ${item.health} / ${item.maxhealth}`}
        </div>
      </div>
    </button>
  );
}
