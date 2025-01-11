import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About1 from "./Components/Routes/About1";
import Products1 from "./Components/Routes/Products1";
import Activities1 from "./Components/Routes/Activities1";
import Contact1 from "./Components/Routes/Contact1";
import { useAuth0 } from "@auth0/auth0-react";
import Feedback from "./Components/Pages/Feedback";
import FeedbackAll from "./Components/Pages/FeedbackAll";
function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/products" element={<Products1 />} />
          <Route path="/activities" element={<Activities1 />} />
          <Route path="/contact" element={<Contact1 />} /> 
          <Route path="/feedback/new" element={<Feedback />} />
          <Route path="/feedback" element={<FeedbackAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
