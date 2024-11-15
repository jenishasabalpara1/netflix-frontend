import { useParams } from "react-router-dom"
import { Showname } from "../content"
import "./after.css"

export const After = () => {
    const { id } = useParams();
    //   console.log(id)
    //   console.log(Showname.find(item=>item.id===id))
    const show = Showname.filter(item => item.id === id)
    console.log(show)

    return (

        <>
            {show.map((list) => (

                <div style={{ backgroundImage: `url(${list.img})` }} className="backimg">
                    <div>
                        <img src={list.movname} className="headingimg" />
                        <h4 className="season">{list.new}</h4>
                        <p className="year">{list.season}</p>
                        <p className="containt">{list.content}</p>
                        <div className="twobtn">
                            <button className="buttonsub"> {list.subscib}</button>
                            <button className="buttonplus">{list.plus}</button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
