import BasicLayout from "component/common/layout/BasicLayout";
import UserProvider from "context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CART_PAGE, LANDING_PAGE } from "scripts/constants";
import CartPage from "views/CartPage";
import LandingPage from "views/LandingPage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <BasicLayout>
          <Routes>
            <Route path={LANDING_PAGE} element={<LandingPage />}></Route>
            <Route path={CART_PAGE} element={<CartPage />}></Route>
          </Routes>
        </BasicLayout>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
