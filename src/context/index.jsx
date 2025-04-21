import { createContext, useEffect, useState } from "react";
import { DataMenu } from "../data/DataMenu"
import { DataPlatosalaCarta } from "../data/DataPlatosalaCarta";
import { DataPostres } from "../data/DataPostres";
import { DataBebidas } from "../data/DataBebidas";

// eslint-disable-next-line react-refresh/only-export-components
export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    
    const [cuenta, setCuenta] = useState({});

    const [sesion, setSesion] = useState(false);
    // Datos de platos, postres y bebidas
    const [dataMenu, setDataMenu] = useState(DataMenu);
    const [dataPlatosalaCarta, setDataPlatosalaCarta] = useState(DataPlatosalaCarta);
    const [dataPostres, setDataPostres] = useState(DataPostres);
    const [dataBebidas, setDataBebidas] = useState(DataBebidas);

    // Para el buscador
    const [inputBuscador, setInputBuscador] = useState("");
    const [platillosMenuFiltrados, setPlatillosMenuFiltrados] = useState([]);
    const [platillosCartaFiltrados, setPlatillosCartaFiltrados] = useState([]);
    const [postresFiltrados, setPostresFiltrados] = useState([]);
    const [bebidasFiltradas, setBebidasFiltradas] = useState([]);

    useEffect(()=> {
        //console.log(inputBuscador);
        if(inputBuscador != ""){
            setPlatillosMenuFiltrados(filterProducto(dataMenu,inputBuscador));
            setPlatillosCartaFiltrados(filterProducto(dataPlatosalaCarta,inputBuscador));
            setPostresFiltrados(filterProducto(dataPostres,inputBuscador));
            setBebidasFiltradas(filterProducto(dataBebidas,inputBuscador));
        } else {
            setPlatillosMenuFiltrados(dataMenu);
            setPlatillosCartaFiltrados(dataPlatosalaCarta);
            setPostresFiltrados(dataPostres);
            setBebidasFiltradas(dataBebidas);
        }
    },[inputBuscador,dataMenu,dataPlatosalaCarta,dataPostres,dataBebidas]);

    //FiltrarMenu
    const filterProducto = (dataProducto, busquedaProducto) => {
        return(dataProducto?.filter(producto => 
            producto.titulo.toLowerCase().includes(busquedaProducto.toLowerCase())
        ))
    }

    return (
        <RestaurantContext.Provider value={{
            cuenta,
            setCuenta,
            sesion,
            setSesion,
            dataMenu,
            setDataMenu,
            dataPlatosalaCarta,
            setDataPlatosalaCarta,
            dataPostres,
            setDataPostres,
            dataBebidas,
            setDataBebidas,
            inputBuscador,
            setInputBuscador,
            platillosMenuFiltrados,
            setPlatillosMenuFiltrados,
            platillosCartaFiltrados,
            setPlatillosCartaFiltrados,
            postresFiltrados,
            setPostresFiltrados,
            bebidasFiltradas,
            setBebidasFiltradas,
        }} >
            { children }
        </RestaurantContext.Provider>
    )
}