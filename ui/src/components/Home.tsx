import memoji from '../assets/memoji copy.png'
import 'animate.css'
import '../index.css'
import { SendTo, Redirect } from '../helperFunctions'
import { Tooltip } from 'primereact/tooltip'

const Home = () => {
    return (
        <>
        <div id='home'>
            <div className="grid">
                <div className="col-12">
                    <Tooltip target=".memoji" mouseTrack mouseTrackLeft={15}/>
                    <img src={memoji} alt="Me Moji" className='memoji animate__pulse animate__infinite' onClick={() => SendTo("about")} data-pr-tooltip="Click To See About Me!" />
                    <h1 className='name'>Blake Runyon</h1>
                    <p className='subtitle'>Looking for a Junior Developer Position</p>
                    <p className='subtitle'>*Click My Memoji To See More About Me*</p>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="social-links">
                        <i className="pi pi-phone pointer" onClick={() => Redirect("tel:304-785-0570")}></i>
                        <i className="pi pi-envelope pointer" onClick={() => Redirect("mailto:me@blakerunyon.io")}></i>
                        <i className="pi pi-github pointer" onClick={() => Redirect("https://github.com/blake-runyon")}></i>
                        <i className="pi pi-linkedin pointer" onClick={() => Redirect("https://www.linkedin.com/in/blake-runyon-6872611ab/")}></i>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
            
        </div>
        
        </>
    )
}

export default Home