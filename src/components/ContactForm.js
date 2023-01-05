import { useNavigate } from "react-router-dom";

import "./ContactFormStyles.css";

// www.emailjs.com

function ContactForm() {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/thankYou');
    };

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
                    ul. Władysława Bełzy 9/40, 15-110 Białystok
                </div>
                <div className="icon">
                   <a className="contact-href" href="tel:+48-601-825-483"> 
                        <i class="fa-solid fa-phone"></i>
                        +(48) 601 825 483
                    </a>
                </div>
                <div className="icon">
                    <a className="contact-href" href="mailto:biuro@elkamelectric.pl">
                        <i class="fa-solid fa-envelope"></i>
                        biuro@elkamelectric.pl
                    </a>
                </div>
            </div>
            <form action="https://formsubmit.co/biuro@elkamelectric.pl" method="POST">

                <input type="hidden" name="_subject" placeholder="Temat"/> 
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://elkamelectric.pl/thankYou"/>
                       
                <input type="email" name="Email" placeholder="Adres e-mail" required/>
                <input type="text" name="Imię i nazwisko" placeholder="Imię i nazwisko" required />
                <textarea className="message" type="text" name="Wiadomość" placeholder="Treść wiadomości" required></textarea>

                <button type="submit" > Wyślij </button>
            </form>

        </div>
    </>
        
    );
}

export default ContactForm;