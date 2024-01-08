import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import PageContainer from "./Containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./Pages/Detail";
import PageNotFound from "./Pages/PageNotFound";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="e-commerce">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </PageContainer>

    </div>
  );
}

export default App;
