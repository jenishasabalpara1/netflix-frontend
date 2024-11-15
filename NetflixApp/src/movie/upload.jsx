import { useEffect, useState } from 'react';
import './upload.css'
import Button from '@mui/joy/Button';
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Upload() {
    const [file, setFile] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleDisc = (event) => {
        setDescription(event.target.value);
    }
    const handleAction = (event) => {
        setType(event.target.value);
    }


    const transferValue = async () => {
        const data = {
            name,
            description,
            type
        }
        // const response = await axios.post('http://localhost:5100/netfilx/', data)
        // console.log(response.data)
        // navigate('/admin/movies')
        console.log(data)
        setName('')
        setDescription('')
        setType('')
    }


    return (
        <div className="upload">
            <div className="uploadin">
                <img src={file} className="uploadimg" />
                <div className="file">
                    <input type="file" onChange={handleChange} />
                </div>
            </div>

            <div className="inputfild">
                <form>
                    <div className="labelin">     
                        <label>Name:</label><br />
                        <input type="text" name="name" value={name} onChange={handleName} className="uploadinput" /><br />
                    </div>
                    <div className="labelin">
                        <label>Description:</label><br />
                        <input type="text" name="description" value={description} onChange={handleDisc} className="uploadinput" /><br />
                    </div>
                    <div className="labelin" value={type}>
                        <label value={type} onChange={handleAction} name="type">Action:</label><br />
                        <Select multiple >
                            <Option value="Comedy">Comedy</Option>
                            <Option value="Light-hearted">Light-hearted</Option>
                            <Option value="Sitcom">Sitcom</Option>
                            <Option value="Slapstick">Slapstick</Option>
                            <Option value="Horro">Horro</Option>
                            <Option value="Mystery">Mystery</Option>
                            <Option value="Occult">Occult</Option>
                            <Option value="Paranormal">Paranormal</Option>
                            <Option value="Action">Action</Option>
                            <Option value="Dramedy">Dramedy</Option>
                            <Option value="Family-Friendly">Family-Friendly</Option>
                            <Option value="Feel-Good">Feel-Good</Option>
                            <Option value="Drama">Drama</Option>
                            <Option value="Race Against Time">Race Against Time</Option>
                            <Option value="Girl Power">Girl Power</Option>
                            <Option value="Gritty">Gritty</Option>
                            <Option value="Crime">Crime</Option>
                            <Option value="Biopic">Biopic</Option>
                            <Option value="Controversial">Controversial</Option>
                        </Select>
                    </div>
                    <div className="labelin">
                        <label>Timming:</label><br />
                        <input type="text" name="time" className="uploadinput" /><br />
                    </div>
                    <div className="labelin">
                        <label>Release Date:</label><br />
                        <input type="text" name="date" className="uploadinput" /><br />
                    </div>
                    <div className="labelin">
                        <label name="language">Languages:</label><br />
                        <Select multiple >
                            <Option value="Hindi">Hindi</Option>
                            <Option value="English">English</Option>
                            <Option value="Marathi">Marathi</Option>
                            <Option value="Telugu">Telugu</Option>
                            <Option value="Gujrati">Gujrati</Option>
                        </Select>
                    </div>
                    <div className="uplodbtn">
                        <Button variant="soft" onClick={transferValue}>Submit</Button>
                        <Link to="/admin/movies"> <Button variant="soft">Cancel</Button></Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export { Upload }
