import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Profile, Shop} from "./pages/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
