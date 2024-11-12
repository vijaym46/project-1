import React from "react";
import RoutesConfig from "./routes/RoutesConfig";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const excludedRoutes = ["/admin", "/admin/dashboard", "/admin/category_pricing", "/admin/sub_category_pricing"];
  const shouldHideHeaderFooter = excludedRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderFooter && <Header />}
      <RoutesConfig />
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;