import React, {useState} from "react";
//import UserContextProvider from "./Context/ContextProvider"
import './App.css';

function App() {
  const [userName, setUserName] = useState({
    name: "",
    surname: ""
  });
  function handleChange(e){
    let {name,value} = e.target;
    setUserName((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      }
    })
   
  }
  localStorage.setItem("User", JSON.stringify(userName));
  let userfullName = JSON.parse(localStorage.getItem("User"));
  let user_fname = userfullName.name;
  let user_lname = userfullName.surname;
  return (
   
    <div className="App">
      <form>
        <input name="name" value={userName.name} onChange={handleChange} placeholder="your name"/>
        <input name="surname" value={userName.surname} onChange={handleChange} placeholder="your surname" />
        <h1>{user_fname} {user_lname}</h1>
      </form>
    </div>
    

  );
}

export default App;
