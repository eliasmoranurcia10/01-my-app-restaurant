const SeccionContact = () => {
    return (
        <>
            <section id="contact" className="py-10 bg-base-100">
                <h2 className="text-3xl font-bold text-center mb-6">Mantente en Contacto</h2>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="Tu correo electrónico" className="input input-bordered w-full" />
                    <button type="submit" className="btn btn-primary mt-4">Suscríbete</button>
                </form>
            </section>
        </>
    ) 
}

export default SeccionContact;