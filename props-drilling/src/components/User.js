import React,{useContext} from "react";
import UserContext from "../context/userContext";

const User = ({id,name}) => {

    const {deleteUser} = useContext(UserContext);
   
  return (
    <div className="--flex-between">
      <h3 className="--text-light">{name}</h3>
      <button onClick={()=>deleteUser(id)} className="--btn --btn-danger">Delete</button>
    </div>
  );
};

export default User;