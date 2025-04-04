import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/main.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;