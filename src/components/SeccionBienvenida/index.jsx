
const SeccionBienvenida = () => {
    return(
        <>
            <section className="hero bg-cover bg-center relative mt-15">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="relative text-center text-white py-20">
                    <h1 className="text-4xl font-bold">Comida Fresca, Sabor Único</h1>
                    <p className="text-lg mt-4">Disfruta de nuestros platillos hechos con amor y frescura.</p>
                    <button className="btn btn-primary mt-6">Ver Menú</button>
                </div>
            </section>
        </>
    )
}

export default SeccionBienvenida;