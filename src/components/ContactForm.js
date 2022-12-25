import "./ContactFormStyles.css";

function ContactForm() {
    return(
    <>
        <div className="heading">
            <h1>Bądźmy w kontakcie</h1>
            <p>Jeżeli masz jakiekolwiek pytania dotyczące naszej oferty oraz świadczonych przez nas usług – skontaktuj się z nami.</p>
        </div>
        <div className="form-container">
            <div className="contact-icons">
                <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    ul. Władysława Bełzy 9/40,15-110 Białystok
                </div>
                <div className="icon">
                    <i class="fa-solid fa-phone"></i>
                    +(48) 601 825 483
                </div>
                <div className="icon">
                    <i class="fa-solid fa-envelope"></i>
                    biuro@elkamelectric.pl
                </div>
            </div>
            <form>
                <input placeholder="Imię i nazwisko"/>
                <input placeholder="Adres email"/>
                <input placeholder="Temat"/>
                <textarea placeholder="Treść wiadomości" rows="4"></textarea>
                <button>Wyślij</button>
            </form>

        </div>
    </>
        
    );
}

export default ContactForm;