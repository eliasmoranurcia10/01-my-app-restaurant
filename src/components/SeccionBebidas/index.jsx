import { useContext } from "react";
import CardMenu from "../CardMenu";
import { RestaurantContext } from "../../Context";
import LayoutSeccion from "../Layouts/LayoutSeccion";

const SeccionBebidas = () => {

    const bebidasItems = useContext(RestaurantContext);
    const titleSection = "Elige la bebida de tu preferencia";

    if(bebidasItems.bebidasFiltradas?.length > 0) {
        return (
            <>
                <section id="bebidas" className="py-10">
                    
                    <LayoutSeccion tituloSeccion={titleSection}>
                        {
                            bebidasItems.bebidasFiltradas?.map((bebidaitem, index) => (
                                <CardMenu key={index} data={bebidaitem} />
                            ))
                        }
                    </LayoutSeccion>
                    
                </section>
            </>
        ) 
    }
}

export default SeccionBebidas;
