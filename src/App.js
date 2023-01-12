import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airpeace from "./Pages/Airpeace";
import HealthPass from "./Pages/HealthPass";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/airpeace' element={<Airpeace />}></Route>
        <Route path='/health' element={<HealthPass />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
