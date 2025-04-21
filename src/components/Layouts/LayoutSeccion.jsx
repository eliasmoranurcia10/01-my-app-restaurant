
const LayoutSeccion = ({ children, tituloSeccion }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-6">{tituloSeccion}</h2>
            <div className="
                flex overflow-x-auto no-scrollbar
                lg:flex lg:flex-row lg:flex-wrap lg:justify-center
                "
            >
                {children}
            </div>
            {/*
                <div className="text-center mt-6">
                    <button className="btn btn-secondary">Ver más</button>
                </div>
            */}
        </>
    )
}

export default LayoutSeccion;