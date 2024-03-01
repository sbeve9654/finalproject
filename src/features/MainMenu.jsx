import useAllUsers from "../hooks/useAllUsers";
import useCreateOneUser from "../hooks/useCreateOneUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { replaceLogin } from "./state/login/loginSlice";
import useUsers from "../hooks/useUsers";

export function MainMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, loading] = useAllUsers();
  const [createUser, userLoading, userError] = useCreateOneUser();

  function onLoginClick() {
    event.preventDefault();
    let loginerror = "no such username";

    users.forEach(pwCheck);
    function pwCheck(item) {
      if (item.name === username.value) {
        if (item.password === password.value) {
          loginerror = "login sucessful";
        } else {
          loginerror = "wrong password";
        }
      }
    }

    console.log(loginerror);
    dispatch(replaceLogin(username.value));
    window.localStorage.setItem("user", username.value);
    if (loginerror === "login sucessful") {
      navigate("/gamesave");
    }
  }
  function onRegisterClick() {
    let nameUsed = false;
    event.preventDefault();
    users.forEach(nameCheck);
    function nameCheck(item) {
      if (item.name === username.value) {
        alert("Username already in use!");
        nameUsed = true;
        return;
      }
    }
    if (nameUsed) {
      return;
    }
    createUser({ name: username.value, password: password.value }, (err) =>
      console.log(err)
    );
    dispatch(replaceLogin(username.value));
    window.localStorage.setItem("user", username.value);
    alert(
      `User Created! \n Username: ${username.value} \nPassword: ${password.value}`
    );
    navigate("/gamesave");
  }
  if (loading) return;
  return (
    <div>
      <form>
        <h2>Login</h2>
        <br />
        Username:
        <input id="username" />
        <br />
        Password:
        <input id="password" />
        <br />
        <button onClick={onRegisterClick}>register</button>
        <button onClick={onLoginClick}>login</button>
      </form>
    </div>
  );
}
