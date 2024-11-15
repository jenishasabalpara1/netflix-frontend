import "./cele.css"
import ce6 from "../assets/ce6.webp"
import ce8 from "../assets/ce8.webp"
import ce9 from "../assets/ce9.webp"
import ce17 from "../assets/ce17.webp"
import ce12 from "../assets/ce12.webp"
import ce14 from "../assets/ce14.webp"
import ce15 from "../assets/ce15.webp"

const Celebrationview=()=>{
    return(
        <>
        <div className="mainpart">
            <h1 className="cel">Celebrating Independence Day</h1>
            <div className="view2part">
            <img src={ce6} className="serimg"/>
              <img src={ce8} className="serimg"/>
              <img src={ce9} className="serimg"/>
              <img src={ce17} className="serimg"/>
              <img src={ce12} className="serimg"/>
              <img src={ce14} className="serimg"/>
              <img src={ce15} className="serimg2"/>
            </div>
        </div>
        </>
    )
}
export {Celebrationview}