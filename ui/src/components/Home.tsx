import memoji from '../assets/memoji copy.png'

const Home = () => {
    function redir(): void {
        window.location.href = "/about";
    }    

    return (
        <>
        <div id='home' onClick={redir}>
            <img src={memoji} alt="Me Moji" className='memoji'/>
        </div>
        </>
    )
}

export default Home