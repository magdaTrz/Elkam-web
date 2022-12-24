import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <h1>Bądźmy w kontakcie</h1>
            <form>
                <input placeholder="Imię i nazwisko"/>
                <input placeholder="Adres email"/>
                <input placeholder="Temat"/>
                <textarea placeholder="Treść wiadomości" rows="4"></textarea>
                <button>Wyślij</button>
                
            </form>
        </div>
    );
}

export default ContactForm;