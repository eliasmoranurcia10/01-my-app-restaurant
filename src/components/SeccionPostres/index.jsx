import { useContext } from "react";
import { RestaurantContext } from "../../Context";
import CardMenu from "../CardMenu";
import LayoutSeccion from "../Layouts/LayoutSeccion";

const SeccionPostres = () => {

    const postresItems = useContext(RestaurantContext);
    const titleSection = "Nuestros Postres Más Populares";

    if(postresItems.postresFiltrados?.length > 0) {
        return (
            <>  
                <section id="postres" className="py-10" >
                    
                    <LayoutSeccion tituloSeccion={titleSection}>
                        
                        {
                            postresItems.postresFiltrados?.map((postreitem, index) => (
                                <CardMenu key={index} data={postreitem} />
                            ))
                        }

                    </LayoutSeccion>
                    
                </section>
            </>
        )
    }
}

export default SeccionPostres;
