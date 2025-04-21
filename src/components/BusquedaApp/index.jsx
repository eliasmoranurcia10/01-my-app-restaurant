import { useContext } from "react";
import { RestaurantContext } from "../../Context";


const BusquedaApp = () => {

    const context = useContext(RestaurantContext);

    return (
        <>
            <input 
                type="text" 
                placeholder="Search" 
                className="input input-bordered w-1/2 md:w-full" 
                value={context.inputBuscador}
                onChange={ (event) => context.setInputBuscador(event.target.value) }
            />
        </>
    )
}

export default BusquedaApp;
