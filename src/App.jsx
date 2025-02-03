import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";



function App() {
  return (
    <BrowserRouter>
    <Header />
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;