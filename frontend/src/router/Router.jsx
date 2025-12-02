import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/login";

const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/Cadastro", element: <Cadastro/> },
    { path: "/Login", element: <Login/> },
]);
export default router;