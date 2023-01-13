import "./App.css";
import Create from "./components/Create";
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <div>
        <Router>
          <Routes>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
            <Route exact path="/" element={<Read />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
