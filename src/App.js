import "./App.css";
import Signing from "./Signing";
import loging from "./loging";
var log = true

function isLogged() {
  return (
    log ? <div>{Signing()}</div> : <div>{loging()}</div>
  )
}

function App() {
  return (
    <div>
      {isLogged()}
    </div>
  );
}

export default App
