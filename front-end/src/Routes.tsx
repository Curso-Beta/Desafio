import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { NotFound } from "./pages/NotFound";
import { parseCookies } from "nookies";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { "cursoBeta.token": token } = parseCookies();
  const isAuthenticated = !!token;

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function NotRequireAuth({ children }: { children: JSX.Element }) {
  const { "cursoBeta.token": token } = parseCookies();
  const isAuthenticated = !!token;
  let location = useLocation();

  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="/home" element={<Home />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
