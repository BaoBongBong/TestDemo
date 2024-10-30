import videoHomePage1 from '../../assets/video-homepage1.mp4'
import videoHomePage2 from '../../assets/video-homepage2.mp4'

const HomePage = (props) => {
    return (
        <div className="hoempage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage2}
                    type='video/mp4'
                />
            </video>
        </div>
    )
}
export default HomePage