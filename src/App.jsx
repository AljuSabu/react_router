import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./component/layout/Layout";
import CarSinglePage from "./pages/CarSinglePage";
import AdminLayout from "./component/adminLayout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Income from "./pages/admin/Income";
import Review from "./pages/admin/Review";
import Inventory from "./pages/admin/Inventory";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<CarSinglePage />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:id" element={<CarSinglePage />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />

            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
