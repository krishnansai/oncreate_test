import img from "../assets/logo.png"
import prize from "../assets/1.png"
import person from "../assets/2.png"
import "./header.css"

const Middle = () => {
    return (
        <>
            <div className="container">

                <div className="pic">
                    <center><img className="head" src={img} alt="ss" /></center>
                    <div className="line">
                        <div className="flex">
                            <img className="prize" src={prize} alt="" />
                        </div>
                        <div className="gov">
                            <div className="let">
                                <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>

                                <ul>
                                    <li><h5> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h5></li>
                                    <li><h5> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</h5></li>
                                </ul>
                            </div>
                            <img className="person" src={person} alt="" />
                            <h5>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h5>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Middle