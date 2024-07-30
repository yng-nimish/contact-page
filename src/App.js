import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Escalade from "./Components/Escalade";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Escalade />
    </div>
  );
}

export default App;
