import heroImage from "../assets/hero-illustration.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 pt-48 pb-32">

      {/* 🔥 PARTICLE BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="particle w-4 h-4 top-20 left-10"></div>
        <div className="particle w-3 h-3 top-40 left-1/4"></div>
        <div className="particle w-5 h-5 top-60 right-20"></div>
        <div className="particle w-2 h-2 bottom-40 left-1/3"></div>
        <div className="particle w-4 h-4 bottom-60 right-1/4"></div>
        <div className="particle w-3 h-3 top-1/2 left-1/2"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Sign Documents Digitally,
            <span className="block text-blue-600 mt-3">
              Securely & Legally
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
            Streamline your document signing process with our legally binding
            e-signature platform.
          </p>

          <div className="mt-8 flex gap-4">
            
            {/* 🔥 CONDITIONAL BUTTON */}
            {user ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition inline-block"
              >
                Go to Dashboard
              </button>
            ) : (
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition inline-block"
              >
                Get Started
              </Link>
            )}

            {/* <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Watch Demo
            </button> */}

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Digital Signature Illustration"
            className="w-[120%] max-w-[1000px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;