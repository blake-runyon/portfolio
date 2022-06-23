import memoji from '../assets/memoji copy.png'
import 'animate.css'
import '../index.css'
import { SendTo } from '../helperFunctions'
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
                        <i className="pi pi-linkedin"></i>
                        <i className="pi pi-github"></i>
                        <i className="pi pi-phone"></i>
                        <i className="pi pi-envelope"></i>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
            
        </div>
        
        </>
    )
}

export default Home