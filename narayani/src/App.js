import logo from './logo.svg';
import './App.css';
import Allpage from './AllPages/Allpage';
import { PopupForm } from "./PopupForm/PopupForm";
import AllProduct from './Body/AllCetegory/AllProduct';

function App() {
  return (
    <div className="App">
     <Allpage/>
     {/* <GoogleAuthLogin/> */}
     <PopupForm/>
     {/* <AllProduct/> */}

    </div>
  );
}

export default App;
