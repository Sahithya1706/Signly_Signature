import { ShieldCheck, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) setUser(JSON.parse(userInfo));
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg shadow-md">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-blue-600">Signly</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-700">

          <a href="#categories" className="hover:text-blue-600 font-medium">
            Categories
          </a>

          <a href="#features" className="hover:text-blue-600 font-medium">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-blue-600 font-medium">
            How It Works
          </a>

          {user ? (
            <>
              <span className="font-semibold text-blue-600">
                Welcome, {user.name}
              </span>
              <button
                onClick={logoutHandler}
                className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600 font-medium">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow-md"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 shadow">

          <a href="#categories" onClick={() => setMobileOpen(false)}>
            Categories
          </a>

          <a href="#features" onClick={() => setMobileOpen(false)}>
            Features
          </a>

          <a href="#how-it-works" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>

          {user ? (
            <>
              <span className="font-semibold text-blue-600">
                Welcome, {user.name}
              </span>
              <button
                onClick={logoutHandler}
                className="bg-blue-600 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link
                to="/signup"
                className="bg-blue-600 text-white py-2 rounded-lg text-center"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;