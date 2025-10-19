import { Header } from "./components/header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
