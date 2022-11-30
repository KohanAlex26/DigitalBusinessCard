import Details from './Details'
function MainComponent(){
    return (
        <main>
            <h1 className="main--name">Kohan Alexandru</h1>
            <h2 className="main--job_title">Fullstack Developer</h2>
            <h3 className="main--website">kohanalex.website</h3>
            <a href="mailto:kohan_alex@yahoo.com"><button className="main--button_email">Email</button></a>
            <a href="https://www.linkedin.com/in/alexandru-kohan-b64598209/"><button className="main--button_linkedin">LinkedIn</button></a>
            <Details/>
        </main>
    )
}

export default MainComponent