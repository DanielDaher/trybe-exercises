import { useContext } from "react";
import LoginContext from "../Context/LoginContext";

function Profile() {

  const { registeredUserInfo } = useContext(LoginContext);


  return (<div>
    Seja muito bem vindo, {registeredUserInfo.username}!
  </div>);
}

export default Profile;
