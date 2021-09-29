import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"




import "./header.css"
const Footer = () => {
    return (
        <>
            <br />
            <div className="foot">
                

                <h5><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Toll free 1800 200 1234</h5>
                <h5>www.facebook.com/cripumps</h5>
                <h5>www.crigroups.com</h5>
            </div>
        </>
    )
}

export default Footer