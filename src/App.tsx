import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Startpage from "./components/pages/startpage/Startpage";
import Gamepage from "./components/pages/gamepage/Gamepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/start" element={<Startpage />} />
          <Route path="/game" element={<Gamepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
