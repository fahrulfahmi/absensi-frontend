import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { authRoutes } from "../src/featured/auth/rout";

function App() {
  return (
    <Router>
      <Routes>
        {authRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
