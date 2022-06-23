import '../content.css'
import { Button } from 'primereact/button'
import { SendTo } from '../helperFunctions'

const About = () => {
    return (
        <>
        <div className="container">
            <div className="headline">
                <h1>About Me</h1>
                <p>A nature-loving, entrepreneurial minded, and results driven software developer!</p>
            </div>
            <hr />
            <article>
                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <img src="/headshot.jpg" alt="Blake Runyon's Headshot" />
                    </div>
                    <div className="col-12 lg:col-8 text-center lg:text-left align-self-center">
                        <p>
                            My name is <b>Blake Runyon</b> and I have a passion for doing great things. I have always been taught if you're going to do something, then do it right and do it good.
                            I have applied that simple concept into <i>every</i> aspect of my life. 
                        </p>
                        <br />
                        <p>
                            I put 100% into everything that I do. Going above and beyond is my speciality. I am a quick learner, have exceptional communication skills,
                            and I am a team player that wants success for any company that I may be working for.  
                        </p>
                        <br />
                        <p>
                            When challenged with a problem is when I work best. I am a natural born problem solver, and love anything that makes me think.
                        </p>

                        <div className="buttons mt-3">
                            <Button label="Portfolio" icon="pi pi-code" className="mr-2" onClick={() => SendTo("portfolio")} />

                            <Button label="Academics" icon="pi pi-book" className="ml-2" onClick={() => SendTo("academics")} />
                        </div>
                        
                    </div>
                </div>
            </article>
            

        </div>
        </>
    )
}

export default About