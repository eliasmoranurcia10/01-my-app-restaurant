import { APP_NAME } from "../../config/global";

import BusquedaApp from "../BusquedaApp";
import CarritoCompra from "../CarritoCompra";
import UserMenu from "../UserMenu";


const NavbarHome = () => {
    return (
        <>  
            <div className="navbar bg-base-100 shadow-sm fixed top-0 right-0 left-0 pr-10">
                <div className="navbar-start">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xs">{ APP_NAME }</a>
                    </div>
                </div>
                <div className="navbar-center w-1/2">
                    <BusquedaApp />
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <CarritoCompra />
                        <UserMenu />
                    </div>
                </div>
            </div>

        </>
    )
    
}

export default NavbarHome;