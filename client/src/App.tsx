import "./App.css";
import { Home } from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Login } from "./routes/login/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
