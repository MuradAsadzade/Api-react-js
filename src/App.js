import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MyRoute from "./MyRoutes/MyRoute";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoute />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
