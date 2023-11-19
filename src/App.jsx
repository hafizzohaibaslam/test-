import { useState } from "react";
import "./App.css";
import { Approach, Home, Ingredients, Login, ShopAll, Signup } from "./screens";
import { Cart, Footer, Header, NewsletterSection, Sidebar } from "./containers";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const toggleCart = () => setIsCartExpanded(prevState => !prevState);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => setIsSidebarExpanded(prevState => !prevState);
  return (
    <>
      <Header toggleCart={toggleCart} toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <Cart isCartExpanded={isCartExpanded} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
