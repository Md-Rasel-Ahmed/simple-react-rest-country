import Countries from "./components/Countries/Countries";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>All Countries</h1>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
