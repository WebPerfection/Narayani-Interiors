import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Body/Content/Content';
import Footer from './Footer/Footer';
import Designed_by from './Designed_by/Designe_by';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <Footer /> */}
      <Designed_by />
      
    </div>
  );
}

export default App;
