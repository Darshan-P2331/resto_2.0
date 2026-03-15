import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Body from "./pages/body/Body";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import { ThemeProvider } from "./ThemeContext";
import { DataProvider } from "./context/GlobalState";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ThemeProvider>
          <div className="app dark:bg-black">
            <Header />
            <Body />
            <Footer />
            <ToastContainer position="bottom-right" />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
