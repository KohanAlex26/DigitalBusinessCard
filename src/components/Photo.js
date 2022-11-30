import photo from '../images/photo.png'
function Photo()
{
    return(
        <div className="Photo">
            <img src={photo} className="photo--image"></img>
        </div>
    )
}

export default Photo