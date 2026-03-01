import { ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg shadow-md">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
            Signly
          </h1>
        </Link>

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

          {/* 🔥 Conditional Rendering */}
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
              <Link
                to="/login"
                className="hover:text-blue-600 font-medium"
              >
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
      </div>
    </nav>
  );
};

export default Navbar;