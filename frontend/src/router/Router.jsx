import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Cadastro from "../Pages/cadastro/Cadastro";
import Login from "../pages/login/Login";
import Perfil from "../pages/perfil/Perfil";
import Conquista from "../pages/conquistas/Conquista";
import Ranking from "../pages/rankns/Ranking";
import Missao from "../pages/missoes/Missao";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cadastro", element: <Cadastro /> },
    { path: "/login", element: <Login /> },
    { path: "/perfil", element: <Perfil /> },
    { path: "/Conquista", element: <Conquista /> },
    { path: "/Ranking", element: <Ranking /> },
    { path: "/Missao", element: <Missao /> },
]);

export default router;
