import  '../assets/styles/Style.css'

function Header() {
    const encabezado = [
        {
            id: 1,
            image: "/img/Logo.png",
            title: "DreamTravel✨",
            etiqueta: "logo",
            place: "place-1"
        },
        {
            id: 2,
            image: "/img/News.png",
            title: "News",
            etiqueta: "news",
            place: "place-2"
        },
        {
            id: 3,
            image: "/img/Reservation.png",
            title: "Request reservation",
            etiqueta: "reservation",
            place: "place-2"
        },
        {
            id: 4,
            image: "/img/Receipt.png",
            title: "Receipt",
            etiqueta: "receipt",
            place: "place-2"
        },
        {
            id: 5,
            image: "/img/Login.png",
            title: "Login",
            etiqueta: "login",
            place: "place-2"
        },
        {
            id: 6,
            image: "/img/Register.png",
            title: "Register",
            etiqueta: "register",
            place: "place-2"
        }
    ]
    return (
        <div className="Header">
            {encabezado.map ((elemento, i) => {
                return(
                    <div key={i} id={elemento.etiqueta}>
                        <div id={elemento.place}>
                        <img src={elemento.image} alt="" />
                        </div>
                        <span>{elemento.title}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Header;