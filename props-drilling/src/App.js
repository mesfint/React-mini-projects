import "./App.css";
import React, { useState } from "react";
import { userData } from "./components/context-api/data";
import UserList from "./components/context-api/UserList";
import UserContext from "./context/userContext";

//1. Create a context in a separate file
//2. Wrap the App component with the context provider
//3. Consume the context in the child component


function App() {
  const [users, setusers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <UserContext.Provider value={{users,deleteUser}}>
    <div className="--flex-center ">
      <div className="--width-500px --my">
        <h2>Props Drilling</h2>
        <UserList   />
      </div>
    </div>

    </UserContext.Provider>
  );
}

export default App;