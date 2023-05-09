import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Body/Content/Content';
import Footer from './Footer/Footer';
import Designed_by from './Designed_by/Designe_by';
import FloatingButtons from './FloatingButtons/FloatingButtons';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
      <Designed_by />
      <FloatingButtons />

    </div>
  );
}

export default App;
