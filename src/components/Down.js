import product from "../assets/3.png"
import "./header.css"

const Down = () => {
    return (
        <>
            <br />
            <div className="down">
                <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h5>

                <div className="contain">
                    <center><img className="product" src={product} alt="" /></center>
                    <center><h4>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h4></center>
                </div>
                <hr />
            </div>
        </>

    )
}

export default Down