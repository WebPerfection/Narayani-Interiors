import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import HoverDropdown from "./Navbar/Drop"
import Content from './Body/Content/Content';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
