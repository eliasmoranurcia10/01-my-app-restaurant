
const SeccionBebidas = () => {
    return (
        <>
            <section id="bebidas" className="py-10">
                <h2 className="text-3xl font-bold text-center mb-6">Elige la bebida de tu preferencia</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {/*menuItems.slice(0, 3).map(item => (
                    <MenuCard key={item.id} item={item} />
                    ))*/}
                </div>
                <div className="text-center mt-6">
                    <button className="btn btn-secondary">Ver más</button>
                </div>
            </section>
        </>
    ) 
}

export default SeccionBebidas;
