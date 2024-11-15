import "./viewlatest.css"
import seone from "../assets/seone.webp"
import se2 from "../assets/se2.webp"
import se3 from "../assets/se3.webp"
import se4 from "../assets/se4.webp"
import se5 from "../assets/se5.webp"
import se6 from "../assets/se6.webp"
import se7 from "../assets/se7.webp"
import se8 from "../assets/se8.webp"
import se9 from "../assets/se9.webp"
import se10 from "../assets/se10.webp"
import se11 from "../assets/se11.webp"


const Viewlatest = () => {
    return (
        <>
            <div className="mainpart">
                <h1 className="viewlatest">Latest Releases</h1>
                <div className="view2part">
                    <img src={seone} className="serimg" />
                    <img src={se2} className="serimg" />
                    <img src={se3} className="serimg" />
                    <img src={se4} className="serimg" />
                    <img src={se5} className="serimg" />
                    <img src={se6} className="serimg" />
                    <img src={se7} className="serimg" />
                    <img src={se8} className="serimg" />
                    <img src={se9} className="serimg" />
                    <img src={se10} className="serimg" />
                    <img src={se11} className="serimg" />
                </div>
            </div>
        </>
    )
}
export { Viewlatest }