import { useContext } from "react";
import CardMenu from "../CardMenu";
import { RestaurantContext } from "../../Context";
import LayoutSeccion from "../Layouts/LayoutSeccion";

const SeccionMenu = () => {

    const menuItems = useContext(RestaurantContext);
    const titleSection = "Nuestros Menús Más Populares";

    if(menuItems.platillosMenuFiltrados?.length > 0) {

        return (
            <>  
                <section id="menu" className="py-10">
                    
                    <LayoutSeccion tituloSeccion={titleSection}>
                        
                        {
                            menuItems.platillosMenuFiltrados?.map((menuitem, index) => (
                                <CardMenu key={index} data={menuitem} />
                            ))
                        }

                    </LayoutSeccion>
                    
                </section>
            </>
        )
    }
}

export default SeccionMenu;
