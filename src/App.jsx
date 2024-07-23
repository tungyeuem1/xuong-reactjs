import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductList from "./pages/Admin/product/ProductList";
import ProductForm from "./pages/Admin/product/ProductForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route
            path="/product-detail/:id"
            element={<ProductDetailPage />}
          ></Route>
        </Route>
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<DashboardPage />}></Route>
          <Route path="/admin/products" element={<ProductList />}></Route>
          <Route path="/admin/product-form" element={<ProductForm />}></Route>
          <Route
            path="/admin/product-form/:id"
            element={<ProductForm />}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
