import { useState } from "react"
import "./box.css"


const Box = [
    {
        "name": "Mobile",
        "power": "480p",
        "monthprice": "Monthly Price",
        "price": "$149",
        "video": "video and sound quality",
        "fair": "Fair",
        "resolution": "Resolution",
        "p": "480p",
        "devices": "Supported devices",
        "mobile": "Mobile Phone,table",
        "household": "Devices your householde can watch at the same time",
        "one": "1",
        "download": "Download devices",
        "sec": "1"
    },

    {
        "name": "Basic",
        "power": "720p",
        "monthprice": "Monthly Price",
        "price": "$199",
        "video": "video and sound quality",
        "fair": "Good",
        "resolution": "Resolution",
        "p": "720p(HD)",
        "devices": "Supported devices",
        "mobile": "TV,computer,mobile Phone,table",
        "household": "Devices your householde can watch at the same time",
        "one": "1",
        "download": "Download devices",
        "sec": "1"
    },

    {
        "name": "Standard",
        "power": "1080p",
        "monthprice": "Monthly Price",
        "price": "$449",
        "video": "video and sound quality",
        "fair": "Great",
        "resolution": "Resolution",
        "p": "1080p(Full HD)",
        "devices": "Supported devices",
        "mobile": "TV,computer,mobile Phone,table",
        "household": "Devices your householde can watch at the same time",
        "one": "2",
        "download": "Download devices",
        "sec": "2"
    },

    {
        "name": "Premium",
        "power": "4K+HDR",
        "monthprice": "Monthly Price",
        "price": "$649",
        "video": "video and sound quality",
        "fair": "Best",
        "resolution": "Resolution",
        "p": "4K(Ultra HD)+HDR",
        "devices": "Supported devices",
        "mobile": "TV,computer,mobile Phone,table",
        "household": "Devices your householde can watch at the same time",
        "one": "4",
        "download": "Download devices",
        "sec": "6"
    }
]


const BoxData = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleClick = (boxName) => {
        setSelectedBox(boxName);
    };

    return (
        <>
            <div className="mainbox">
                {Box.map((data) => (
                    <div className="databox" key={data.name} onClick={() => handleClick(data.name)}>
                        <div className="blue">
                            <h2>{data.name}</h2>
                            <h3>{data.power}</h3>
                            {selectedBox === data.name && (
                                <i className="fa-regular fa-circle-check check"></i>
                            )}
                        </div>
                        <div className="alldata">
                            <h4 className="grey">{data.monthprice}</h4>
                            <p className="datavalue">{data.price}</p>
                            <hr></hr>
                            <h4 className="grey">{data.video}</h4>
                            <p className="datavalue">{data.fair}</p>
                            <hr></hr>
                            <h4 className="grey">{data.resolution}</h4>
                            <p className="datavalue">{data.p}</p>
                            <hr></hr>
                            <h4 className="grey">{data.devices}</h4>
                            <p className="datavalue">{data.mobile}</p>
                            <hr></hr>
                            <h4 className="grey">{data.household}</h4>
                            <p className="datavalue">{data.one}</p>
                            <hr></hr>
                            <h4 className="grey">{data.download}</h4>
                            <p className="datavalue">{data.sec}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export { BoxData }