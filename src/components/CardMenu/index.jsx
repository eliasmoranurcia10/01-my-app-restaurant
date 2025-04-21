
const CardMenu = ({ data }) => {
    return (
        <>
            <div className="
                card bg-base-70 min-w-40 w-40 h-auto shadow-xl m-3 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
                lg:w-60"
            >
                <figure>
                    <img
                    src={data.foto}
                    alt={data.titulo} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title m-auto text-sm ">{data.titulo}</h2>
                    <p className="m-auto text-xs">{data.descripcion}</p>
                    <div className="card-actions justify-center items-baseline">
                        <button className="btn btn-sm btn-primary btn-circle">-</button>
                        <div>0</div>
                        <button className="btn btn-sm btn-primary btn-circle">+</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CardMenu;