
// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Gamepage from "./components/pages/gamepage/Gamepage";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/game" element={<Gamepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
