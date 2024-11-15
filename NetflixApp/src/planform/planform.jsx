import { BoxData } from "./box"
import "./planform.css"


const Planform = () => {
    return (
        <>
            <div className="signupnavbar">
                <h1 className="netflix">Netflix</h1>
                <p className="signin">Sign In</p>
            </div>

            <div className="planbox">
                <h1 className="chooseplan">Choose the plan that’s right for you</h1>
                <BoxData/>
                <div className="pgbtn">
                <p className="boxprg">D (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                <button className="next2">Next</button>
                </div>
            </div>

            <div className="greyfooter">
                <div className="question">
                    <p>Questions? Call 000-800-919-1694</p>
                    <p>FAQ</p>
                    <p>Privacy</p>
                    <button className="english">English</button>
                </div>
                <div className="question">
                    <p>Help Center</p>
                    <p>Cookie Preferences</p>
                </div>
                <div className="question">
                    <p>Netflix Shop</p>
                    <p>Corporate Information</p>
                </div>
                <div>
                    <p>Terms of Use</p>
                </div>
            </div>
        </>
    )
}
export { Planform }