import twitter from '../images/TwitterIcon.png'
import facebook from '../images/FacebookIcon.png'
import instagram from '../images/InstagramIcon.png'
import github from '../images/GitHubIcon.png'

function Footer(){
    return (
        <footer>
            <div className="footer--container">
                <a href="https://twitter.com/KohanAlex1"><img src={twitter}></img></a>
                <a href="https://www.facebook.com/alex.kohan.1/"><img src={facebook}></img></a>
                <a href="https://www.instagram.com/alex.kohan.1/"><img src={instagram}></img></a>
                <a href="https://github.com/KohanAlex26"><img src={github}></img></a>
            </div>
        </footer>
    )
}

export default Footer