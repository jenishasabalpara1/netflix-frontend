import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import "./admin.css"
import { Link, useNavigate } from "react-router-dom"
import {  useEffect, useState } from 'react';
// import { response } from 'express';
import axios from 'axios';

const Admin = () => {

    const [email, setemail] = useState('');
    const [password, setpaasword] = useState('');
    const navigate=useNavigate()

    const Email = (e) => {
        setemail(e.target.value)
    }
    const Password = (e) => {
        setpaasword(e.target.value)
    }

    const Login = async () => {
        const data = {
            email,
            password
        }
        
        const response=await axios.post('http://localhost:5100/login/register',data);
        console.log(response);
        if(response.data.data){ 
            localStorage.setItem('token',response.data.data)
            navigate('/admin/home')
        }
        setemail('') 
        setpaasword('')
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/admin/home')
        }
    },[])
    return (
        <div className='mainadmin'>
            <div className='adimn'>
                <h1 className='adminh1'>Login</h1>
                <div>
                    <Input placeholder="Email" className='emailadmin' value={email} onChange={Email} />
                    <Input placeholder="Paasword" className='passwordadmin' value={password} onChange={Password} />
                </div>

                <div className='adminbtn'>
                    <Button variant="soft" className='adminlogin' onClick={Login}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export { Admin }