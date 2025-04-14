import { APP_NAME } from "../../config/global";

import { RestaurantProvider } from "../../Context";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "../Home";
import NavbarHome from "../../components/NavbarHome";

const AppRoutes = () => {

    let routes = useRoutes([
        { path: '/', element: <Home /> },
    ])

    return routes;
}

const App = () => {


    //Cambiar el texto de la pestaña
    useEffect(() => {
        document.title = APP_NAME;
    },[]);

    return (
        <RestaurantProvider>
            <BrowserRouter>     
                <AppRoutes />
                <NavbarHome />
            </BrowserRouter>
        </RestaurantProvider>
    )
}

export default App;