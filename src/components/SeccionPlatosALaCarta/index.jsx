import { useContext } from "react";
import CardMenu from "../CardMenu";
import { RestaurantContext } from "../../Context";
import LayoutSeccion from "../Layouts/LayoutSeccion";

const SeccionPlatosALaCarta = () => {

    const cartaItems = useContext(RestaurantContext);
    const titleSection = "Nuestros Platillos Más Populares";

    if(cartaItems.platillosCartaFiltrados?.length > 0) {
        return (
            <>
                <section id="platosalacarta" className="py-10">
                    
                    <LayoutSeccion tituloSeccion={titleSection}>
                    
                    {
                        cartaItems.platillosCartaFiltrados?.map((cartaitem, index) => (
                            <CardMenu key={index} data={cartaitem} />
                        ))
                    }
                    
                    </LayoutSeccion>
                    
                </section>
            </>
        ) 
    }
}

export default SeccionPlatosALaCarta;
