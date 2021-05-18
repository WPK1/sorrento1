const BannerStyle = {
    minWeight: '50vh',
    minWidth: "100",
    position: "relative"
}
const BannerImage = {
    positionm: 'absolute',
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    obbjectPostition: 'center',
    zIndex: 9
}
const TextStyle = {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    zIndex: 99


}
export function Banner( props ){
    return (
        <div className="Banner">
            <img src={props.image} className="banner-image" style={BannerImage} />
            <h2 className="banner-text" style={TextStyle}>
                 {props.text}
            </h2>
        </div>

    )
}