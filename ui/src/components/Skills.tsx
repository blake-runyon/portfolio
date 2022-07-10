import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Redirect } from '../helperFunctions'

const Skills = () => {
    return (
        <>
        <h1 style={{color: "white", textAlign: "center"}}>Project Portfolio</h1>
        <div className="grid">
            <div className="col-4">
                <Card title="Metal Building Quoting Form">
                    This project I developed from the ground up making all design and infrastructure decisions. This project is
                    used in a business setting by <strong>Ascential Buildings of Beckley, WV</strong>. It is a full stack web application
                    that allows employees to submit quotes for metal building construction.
                    <br />
                    <br />
                    <Button icon="pi pi-github" label='Source Code' onClick={() => Redirect("https://github.com/blake-runyon/MetalBuildingCalculator")}/>
                </Card>
            </div>
        </div>
        </>
        
    )
}

export default Skills