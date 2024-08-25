import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function mouseClick() {
    alert(`username: ${username}, password: ${password}`);
  }
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
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              name=""
              id=""
            />
            <p>Disable</p>
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
