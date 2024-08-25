import { useState } from "react";
import "./App.css";

function App() {
  // //Dang bool
  // true: "text"
  // false: "password"
  // //Dang number
  // 0:"text"
  // 1:"password"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false); // const status = false;
  
  function mouseClick() {
    alert(`username: ${username}, password: ${password}`);
  }
  const showPassword = () => {
    // setStatus(true) //status = false => onClick: status = true => onClick: status = true(default)
    setStatus(!status); //status = false=> onCLick: status = true : status = true => Onclick: status = false
  };
  return (
    <div className="App">
      <div className="form">
        <div className="left">
          <p className="title">TRANSPOTER MANAGEMENT</p>
          <div className="form-input">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              name=""
              id=""
            />
          </div>
          <div className="form-input">
            <input
              type={status === false ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              name=""
              id=""
            />
            <p onClick={showPassword}>Disable</p>
          </div>
          <div className="form-input-btn">
            <button className="signin" onClick={mouseClick}>
              SIGN IN
            </button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>
        <div className="right">
          <div className="form-img">
            <img
              src="https://www.easyhaul.com/blog/wp-content/uploads/2021/07/Blog-EasyHaul-Modes-of-Transport-Title-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
