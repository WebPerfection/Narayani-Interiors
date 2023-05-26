import logo from './logo.svg';
import './App.css';
import Allpage from './AllPages/Allpage';
import { PopupForm } from "./PopupForm/PopupForm";

function App() {
  return (
    <div className="App">
     <Allpage/>
     {/* <GoogleAuthLogin/> */}
     <PopupForm/>

    </div>
  );
}

export default App;
