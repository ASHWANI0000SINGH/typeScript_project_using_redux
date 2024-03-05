import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Navbar from "./components/Navbar";
import Comments from "./pages/Comments";
import PostDetails from "./pages/PostDetails";
import Cart from "./pages/Cart";
import Entertrainment from "./components/Entertrainment";
import Footer from "./components/Footer";
import Sports from "./components/Sports";
import "bootstrap/dist/css/bootstrap.min.css";
// import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertrainment" element={<Entertrainment />} />

          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/comments" element={<Comments />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/postDetail/:id" element={<PostDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/countryDetails" element={<CountryDetails />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
