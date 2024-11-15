import { useState } from "react"
import Button from '@mui/joy/Button'; 
import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Link } from "react-router-dom"
// import './upload.css'


function UploadTV(props) {
    const[file, setFile] = useState();
    const[name,setName]=useState('');
    const[discription,setDiscription]=useState('');
    const[action,setAction]=useState('');

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleName=(event)=>{
        setName(event.target.value);
    }
    const handleDisc=(event)=>{
        setDiscription(event.target.value);
    }
    const handleAction=(event)=>{
        setAction(event.target.value);
    }

    const transferValue=(event)=>{
        console.log("hello")
      event.preventDefault();
      const val={
        name,
        discription,
        action,
        
      };
    //   props.func(val);
      clearState();
    }
  
    const clearState = () => {
        setName('');
        setDiscription(''); 
        setAction('');
    };

    const addRows=(data)=>{
          const allData=currData.length;
          data.id=allData+1;
          const updatedata=[...currData];
          updatedata.push(data);
          setCurrData(updatedata);
        };

    // const Change = (event, newValue) => {
    //     console.log(`You have choosen "${newValue}"`);
    // };

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
                        <input type="text" name="name" value={name} onChange={handleName} className="uploadinput"/><br />
                    </div>
                    <div className="labelin">
                        <label>Discription:</label><br />
                        <input type="text" name="discription" value={discription} onChange={handleDisc} className="uploadinput"/><br />
                    </div>
                    <div className="labelin">
                        <label value={action} onChange={handleAction} name="action">Action:</label><br />
                        <Select multiple >
                            <Option value="Mythology">Mythology</Option>
                            <Option value="Dramedy">Dramedy</Option>
                            <Option value="Period">Period</Option>
                            <Option value="Drama">Drama</Option>
                            <Option value="Romance">Romance</Option>
                            <Option value="Family-Friendly">Family-Friendly</Option>
                            <Option value="Dysfunctional Relationships">Dysfunctional Relationships</Option>
                            <Option value="Love Triangle">Love Triangle</Option>
                            <Option value="Common-Man Struggles">Common-Man Struggles</Option>
                            <Option value="Couples">Couples</Option>
                            <Option value="Emotional">Emotional</Option>
                            <Option value="Dance">Dance</Option>
                            <Option value="Family">Family</Option>
                            <Option value="Tough Girls">Tough Girls</Option>
                            <Option value="RomCom">RomCom</Option>

                        </Select>
                    </div>
                    <div className="labelin">
                        <label>Timming:</label><br />
                        <input type="text" name="time"  className="uploadinput"/><br />
                    </div>
                    <div className="labelin">
                        <label>Release Date:</label><br />
                        <input type="text" name="date" className="uploadinput"/><br />
                    </div>
                    <div className="labelin">
                        <label name="language">Languages:</label><br />
                        <Select multiple >
                            <Option value="Hindi">Hindi</Option>
                            <Option value="English">English</Option>
                            <Option value="Marathi">Marathi</Option>
                            <Option value="Gujrati">Gujrati</Option>
                        </Select>
                    </div>
                    <div className="uplodbtn">
                        <Button variant="soft" onClick={transferValue}>Submit</Button>
                        <Link to="/admin/tv"> <Button variant="soft">Cancel</Button></Link>
                    </div>
                </form>
                
                <div func={addRows} ></div>
            </div>
        </div>
    );
}

export { UploadTV }