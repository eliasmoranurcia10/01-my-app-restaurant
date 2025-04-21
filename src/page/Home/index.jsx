
import SeccionBienvenida from "../../components/SeccionBienvenida";
import SeccionMenu from "../../components/SeccionMenu";
import SeccionPlatosALaCarta from "../../components/SeccionPlatosALaCarta";
import SeccionPostres from "../../components/SeccionPostres";
import SeccionBebidas from "../../components/SeccionBebidas";
import SeccionNoEncontrado from "../../components/SeccionNoEncontrado";
import SeccionDelivery from "../../components/SeccionDelivery";
import SeccionAbout from "../../components/SeccionAbout";
import SeccionTestimonios from "../../components/SeccionTestimonios";
import SeccionLocation from "../../components/SeccionLocation";
import SeccionContact from "../../components/SeccionContact";
import SeccionFooter from "../../components/SeccionFooter";

const Home = () => {
    return (
        <>
            <SeccionBienvenida />
            <SeccionMenu />
            <SeccionPlatosALaCarta />
            <SeccionPostres />
            <SeccionBebidas />
            <SeccionNoEncontrado />
            <SeccionDelivery />
            <SeccionAbout />
            <SeccionTestimonios />
            <SeccionLocation />
            <SeccionContact />
            <SeccionFooter />
        </>
    )
}

export default Home;