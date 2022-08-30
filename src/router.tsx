import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./contexts/auth";
import SettingsProducts from "./pages/SettingsProducts";
import SettingsCategories from "./pages/SettingsCategories";
const Router = () => {
  const { logged } = useAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/products" element={<SettingsProducts />} />
          <Route path="/settings/categories" element={<SettingsCategories />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      {/*Rota de segurança*/}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default Router;
