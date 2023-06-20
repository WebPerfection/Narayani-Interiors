import logo from './logo.svg';
import './App.css';
import Allpage from './AllPages/Allpage';
import { PopupForm } from "./PopupForm/PopupForm";
import AllProduct from './Body/AllCetegory/AllProduct';
import FloatingButtons from './FloatingButtons/FloatingButtons';

function App() {
  return (
    <div className="App">
     <Allpage/>
     {/* <GoogleAuthLogin/> */}
     <PopupForm/>
     <FloatingButtons />
     {/* <AllProduct/> */}

    </div>
  );
}

export default App;
