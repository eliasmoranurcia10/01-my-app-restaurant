import slide from "../../assets/images/sliderRestaurante.png"

const SeccionBienvenida = () => {
    return(
        <>
            <section id="seccionBienvenida" className="mt-15">
                <img 
                    src={slide} 
                    alt="Slide de Bienvenida en el restaurant" 
                    className="w-full h-full object-cover object-center sm:h-100 2xl:h-120" 
                />
                
            </section>
        </>
    )
}

export default SeccionBienvenida;