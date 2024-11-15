import { Link } from "react-router-dom"
import "./signup.css"

const SignUp = () => {
    return (
        <>
            <div className="signupnavbar">
                <h1 className="netflix">Netflix</h1>
                <p className="signin">Sign In</p>
            </div>


            <div className="main">
                <div className="chooseplan">
                    <div>
                    {/* <i class="fa-solid fa-check"></i> */}
                        <h2 className="yourplan">Choose your plan.</h2>
                    </div>
                    <div className="check">
                        <i class="fa-solid fa-check"></i>
                        <p className="commitment">No commitments, cancel <br />anytime.</p>
                    </div>
                    <div className="check">
                        <i class="fa-solid fa-check"></i>
                        <p className="commitment">Everything on Netflix for one<br /> low price.</p>
                    </div>
                    <div className="check">
                        <i class="fa-solid fa-check"></i>
                        <p className="commitment">No ads and no extra fees. Ever.</p>
                    </div>
                    <Link to="/signup/planform"><button className="next">Next</button></Link>
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

export { SignUp }