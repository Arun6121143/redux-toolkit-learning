import "./App.css";
import Cart from "./component/Cart";
import Dashboard from "./component/Dashboard";
// import Product from "./component/Product";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
