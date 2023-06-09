import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Combine from "./components/Combine"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/new" element={<Combine/>}/>
      </Routes>
    </div>
  );
}

export default App;
