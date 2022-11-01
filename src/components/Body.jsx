import  '../assets/styles/Style.css'

function Body() {
    const images = [
        {
            id: 1,
            image: "/img/Cancun.jpg",
            text: "Cancun"
        },
        {
            id: 2,
            image: "/img/Cdmx.jpg",
            text: "Cdmx"
        },
        {
            id: 3,
            image: "/img/Yucatan.jpg",
            text: "Yucatan"
        }
    ]

    return (
        <div className="Body">
            <div className="first_section">
                <div className='image-1'>
                    <img src="/img/Background.jpg" alt="" />
                </div>
                <div className="lema">
                <label htmlFor="">Plan your next trip with us</label>
                <div className='image-2'>
                    <img src="/img/Equipaje.png" alt="" />
                </div>
                </div>
                <div className='image-3'>
                    <img src="/img/Background2.jpg" alt="" />
                </div>
            </div>
            <div className='title-header'>
                <div className='title-header-1'>
                    <label htmlFor="">Top most sought after destinations today in Mexico</label>
                </div>
                <div className='title-header-2'>
                    <label htmlFor="">Deals that can't wait</label>
                </div>
            </div>
            <div className="second_section">
                <div className="destinos">
                    {images.map ((elemento, i) => {
                        return(
                            <div key={i} className="imagenes">
                                <div className='position'>
                                    <img src={elemento.image} alt="" />
                                </div>
                                <div className='location'>
                                    <span>{elemento.text}</span>
                                </div>
                            </div>
                         )
                    })}
                </div>
                <div className="ofertas">
                    <div className="img">
                        <img src="/img/Ofertas.jpg" alt="" />
                    </div>
                    <div className='button'>
                        <label htmlFor="">See offers</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;