const Contact = () => {
    return (
        <div className="container">
            <div className="headline">
                <h1>Contact Me</h1>
                <p>My inbox is always open!</p>
            </div>
            <hr />
            <article>
                <div className="grid">
                    <div className="col-12 text-center align-self-center">
                       <p><i className="pi pi-envelope"></i> <a href="mailto:me@blakerunyon.io">me@blakerunyon.io</a></p>
                       <p><i className="pi pi-phone"></i><a href="tel:+13047850570"> 304-785-0570</a></p>
                    </div>
                </div>
            </article>
            

        </div>
    )
}

export default Contact