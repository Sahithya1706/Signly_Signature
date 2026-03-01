import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Documents from "./pages/Documents";
import DocumentViewer from "./pages/DocumentViewer"; // ✅ ADD THIS

import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>

      {/* HOME PAGE (WITH NAVBAR) */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* LOGIN PAGE */}
      <Route path="/login" element={<Login />} />

      {/* SIGNUP PAGE */}
      <Route path="/signup" element={<Signup />} />

      {/* DASHBOARD WITH SIDEBAR */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* DOCUMENTS LIST */}
      <Route path="/documents" element={<MainLayout />}>
        <Route index element={<Documents />} />
      </Route>

      {/* 🔥 DOCUMENT VIEWER ROUTE (THIS WAS MISSING) */}
      <Route path="/document/:id" element={<DocumentViewer />} />

      {/* USERS */}
      <Route path="/users" element={<MainLayout />}>
        <Route index element={<Users />} />
      </Route>

    </Routes>
  );
}

export default App;