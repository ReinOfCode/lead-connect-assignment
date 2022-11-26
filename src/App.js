import BasicLayout from "component/common/layout/BasicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "views/CartPage";
import LandingPage from "views/LandingPage/Index";

function App() {
  return (
    <BasicLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/cart-page" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </BasicLayout>
  );
}
export default App;
