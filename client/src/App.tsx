import "./App.css";
import { Home } from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Login } from "./routes/login/login";
import { UserDashboard } from "./routes/user-dashboard/user-dashboard";
import { Transactions } from "./routes/transactions/transactions";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="dashboard" element={<UserDashboard />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}

export default App;
