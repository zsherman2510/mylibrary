import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./app/App";
import Layout from "./components/Layout";
import AvailableBooks from "./components/pages/AvailableBooks";
import MyLibrary from "./components/pages/MyLibrary";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/available" element={<AvailableBooks />} />
          <Route exact path="/myLibrary" element={<MyLibrary />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
