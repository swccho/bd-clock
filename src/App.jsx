import AppName from "./components/AppName.jsx";
import Slogan from "./components/Slogan.jsx";
import Clock from "./components/Clock.jsx";


function App() {

  return <center className={'clock-name'}>
      <div className=" d-flex flex-column align-items-center justify-content-center vh-100">
        <AppName />
        <Slogan />
        <Clock />

      </div>
  </center>
}

export default App
