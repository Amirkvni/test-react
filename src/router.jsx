import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Product from "./components/Product";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:productID", element: <Product /> },
]);
