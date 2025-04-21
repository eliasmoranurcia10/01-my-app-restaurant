import { useContext } from "react";
import { RestaurantContext } from "../../Context";

const SeccionNoEncontrado = () => {

    const contextoProducto = useContext(RestaurantContext)

    if(
        contextoProducto.platillosMenuFiltrados?.length === 0 &&
        contextoProducto.platillosCartaFiltrados?.length === 0 &&
        contextoProducto.postresFiltrados?.length === 0 &&
        contextoProducto.bebidasFiltradas?.length === 0
    ) {
        return(
            <>
                <section 
                    id="noencontrado" 
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                >           
                    <h2 className="text-3xl mb-2 font-bold ">Oops...</h2>
                    <p className="mb-4">No se encontraron platillos que coincidan con tu búsqueda.</p>
                    <button
                        className="btn btn-primary mx-auto block"
                        onClick={() => contextoProducto.setInputBuscador("")}
                    >
                        Volver a ver todo
                    </button>
                    
                </section>
            </>
        )
    }   
}

export default SeccionNoEncontrado;