import useCreateOneFile from "../hooks/useCreateOneFile";
import useUsers from "../hooks/useUsers";
import FileSelect from "./components/FileSelect";
import { replaceFile } from "./state/file/fileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function GameSave() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.name);
  const [users, loading] = useUsers(username);
  const [createFile, fileLoading, fileError] = useCreateOneFile();
  const navigate = useNavigate();

  function onNewFileClick() {
    const userId = parseInt(users[0].id);
    createFile(
      { playerId: userId },
      ({ id }) => dispatch(replaceFile(parseInt(id))),
      (err) => console.log(err)
    );
    alert("New file created!");
    navigate("/game");
  }
  if (loading) return;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FileSelect item={users[0]} />
      <button
        style={{ width: "200px", margin: "auto" }}
        onClick={onNewFileClick}
      >
        New File
      </button>
    </div>
  );
}
