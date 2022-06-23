import { Button } from "primereact/button"
import { SendTo } from "../helperFunctions"
import memoji from '../assets/memoji copy.png'

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
                    {/* <div className="col-12 lg:col-4">
                        <img src={memoji} alt="Memoji" />
                    </div> */}
                    <div className="col-12 text-center align-self-center">
                       <p><i className="pi pi-envelope"></i> me@blakerunyon.io</p>
                       <p><i className="pi pi-phone"></i> 304-785-0570</p>
                    </div>
                </div>
            </article>
            

        </div>
    )
}

export default Contact