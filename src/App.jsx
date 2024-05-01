import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films"
import Contact from "./pages/Contact"
// import Loader from "./pages/LoaderPage"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Films" element={<Films/>} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    
    {/* <Contact/> */}
    {/* <Films/> */}
     {/* <p className="text-secondary">preye</p> */}
    </>
  )
}

export default App
