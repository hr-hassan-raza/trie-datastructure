import "./App.css";
import Login from "./pages/Login";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComplaintForm } from "./pages/ComplaintForm";
import ComplaintComponent from "./components/ComplaintComponent";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/complaints" element={<ComplaintComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
