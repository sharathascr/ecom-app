import "./App.css";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppNavbar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
