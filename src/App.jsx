import { useState, useEffect } from "react";
import Loader from "./pages/LoaderPage";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films"
import Contact from "./pages/Contact"
// import Loader from "./pages/LoaderPage"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    // Simulate loading time (you can replace this with actual data fetching)
    // const timeout = () =>{
      setTimeout(() => {
        setLoading(false);
      }, 8000);
    // } 

    // Clean up the timeout when the component unmounts
    // timeout()
  }, []);
  return loading ? (<Loader/>) : (
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
