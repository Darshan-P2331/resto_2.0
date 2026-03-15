import { Route, Routes } from "react-router";
import ActivateEmail from "./Auth/ActivateEmail";
import ForgotPassworrd from "./Auth/ForgotPassworrd";
import Register from "./Auth/Register";
import ResetPassword from "./Auth/ResetPassword";
import SignIn from "./Auth/SignIn";
import Categories from "./Categories/Categories";
import CheckOut from "./Checkout/CheckOut";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import CreateProduct from "./Products/CreateProduct";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";

type Props = {};

export default function Body({}: Props) {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/forgot_password" element={<ForgotPassworrd />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/user/reset/:token" element={<ResetPassword />} />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivateEmail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
