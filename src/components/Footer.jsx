import  '../assets/styles/Style.css'

function Footer() {
    const referencias = [
        {
            id: 1,
            referencia: "Terms of Service"
        },
        {
            id: 2,
            referencia: "Privacy Policy"
        },
        {
            id: 3,
            referencia: "Help"
        },
        {
            id: 4,
            referencia: "All rights reserved"
        }
    ]

    return (
        <div className="Footer">
            {referencias.map ((elemento, i) => {
                return(
                    <div key={i} className="referencias">
                        <span>{elemento.referencia}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Footer;