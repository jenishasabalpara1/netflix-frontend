import "./show.css"
import { Link } from "react-router-dom"
import { Showname } from "../content"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Show = () => {
    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
    };

    const type = Showname.filter(item => item.type === "latest-release")
    const indday = Showname.filter(item => item.type === "Independence Day")

    const [move, setmove] = useState(-1);
    const [move2,setmove2]=useState(-1);


    return (
        <>

            <div className="mainpart">
                <div>
                    <div className="latest">
                        <h1 className="releases">Latest Releases</h1>
                        <Link to="/show/latest"><p className="view"> View All</p> </Link>
                    </div>
                    <Slider {...settings}>
                        {type.map((img, ind) => {
                            return (
                                <div className="latestshow" >
                                    <Link to={`/show/${img.id}`} className="hover" style={{ position: "relative" }} onMouseEnter={() => setmove(ind)} onMouseLeave={() => setmove(-1)}>
                                        <img src={img.photo} className="serimg" style={{ zIndex: "1" }} />
                                        <div style={{
                                            height: "315px", width: "285px", backgroundColor: "black", top: "0", left: "0", borderRadius: "5px", flexDirection: "column", transform: "translate(-50%,0%)", position: "absolute", display: `${ind === move ? "flex"
                                                : "none"
                                                }`,
                                        }}>
                                            <img src={img.img} className="hoverimg" />
                                            <div className="hover-main">
                                                <div className="hover-btn">
                                                    <button className="hoverbtn1">{img.subscib}</button>
                                                    <button className="hoverbtn2">{img.plus}</button>
                                                </div>
                                                <div className="hoverlang">{img.season}</div>
                                                <p className="hoverprg">{img.content}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        }


                    </Slider>

                </div>
                <div className="part2">
                    <div className="celeshow">
                        <h1 className="releases">Celebrating Independence Day</h1>
                        <Link to="/show/celelatest"><h3 className="view">View All</h3></Link>
                    </div>
                    <Slider {...settings}>
                        {indday.map((img, ind) => {
                            return (
                                <div className="latestshow2" >
                                    <Link to={`/show/${img.id}`} className="hover" style={{ position: "relative" }} onMouseEnter={() => setmove2(ind)} onMouseLeave={() => setmove2(-1)}>
                                        <img src={img.post} className="serimg" style={{ zIndex: "1" }} />
                                        <div style={{
                                            height: "315px", width: "285px", backgroundColor: "black", top: "0", left: "0", borderRadius: "5px", flexDirection: "column", transform: "translate(-50%,0% )", position: "absolute", display: `${ind === move2 ? "flex"
                                                : "none"
                                                }`,
                                        }}>
                                            <img src={img.img} className="hoverimg" />
                                            <div className="hover-main">
                                                <div className="hover-btn">
                                                    <button className="hoverbtn1">{img.subscib}</button>
                                                    <button className="hoverbtn2">{img.plus}</button>
                                                </div>
                                                <div className="hoverlang">{img.season}</div>
                                                <p className="hoverprg">{img.content}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
export { Show }