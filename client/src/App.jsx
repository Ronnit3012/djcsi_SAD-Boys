import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Profile} from "./pages/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
