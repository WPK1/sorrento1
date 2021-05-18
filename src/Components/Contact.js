import '../Styles/Contact.css'
export function Contact(props) {
    return (
        <div className="Contact">
            <h2>Contact Our Team</h2>
            <form id="contact-form"
                action="https://example.com/handler"
                method="post"
            >
                {/* name */}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name"/>
                {/* email */}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="yourEmail@domain.com"/>
                {/* message */}
                <label htmlFor="message">Message</label>
                <textarea id="message" row="5" cols="24" placeholder="Enter any additional information"></textarea>
                <button type="reset">Clear</button>
                <button type="submit">Enter</button>

            </form>
        </div>
    )
}

export default Contact