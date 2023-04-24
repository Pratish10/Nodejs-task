import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CarEmail,
  Home,
  Incomecar,
  PhonePrice,
  QuoteEmail,
  Top10Cities,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income-car" element={<Incomecar />} />
        <Route path="/phone-price" element={<PhonePrice />} />
        <Route path="/quote" element={<QuoteEmail />} />
        <Route path="/car-email" element={<CarEmail />} />
        <Route path="/top10cities" element={<Top10Cities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
