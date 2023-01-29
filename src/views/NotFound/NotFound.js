import "./NotFound.scss"
import Navbar from '../../components/Navbar/Navbar';

function NotFound() {
    return (
        <>
        <Navbar/>
        <div className="not-found-wrapper">
            <div className="not-found-content">
                OOPS!
            </div>
        </div>
    </>
    )
}

export default NotFound