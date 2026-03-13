import { BrowserRouter } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "./ThemeContext";
import Footer from "./components/footer/Footer";
import Body from "./components/Body/Body";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="app dark:bg-black">
          <Header />
          <Body />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
