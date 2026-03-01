import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // ✅ FIXED PATHS HERE
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Documents", icon: FileText, path: "/documents" }, // fixed
    { name: "Users", icon: Users, path: "/users" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-700 via-indigo-700 to-blue-900 text-white flex flex-col p-6 shadow-2xl">

        {/* Logo */}
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <ShieldCheck size={22} />
          <h1 className="text-xl font-semibold tracking-wide">Signly</h1>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition ${
                  isActive
                    ? "bg-white text-blue-800 shadow"
                    : "hover:bg-blue-600/40"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Profile Section */}
        <div className="border-t border-blue-500 pt-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div>
              <p className="text-sm font-medium">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-blue-200">
                {user?.email || ""}
              </p>
            </div>
          </div>

          <button
            onClick={logoutHandler}
            className="flex items-center gap-2 mt-4 text-sm hover:text-red-300"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;