import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function Layout() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
