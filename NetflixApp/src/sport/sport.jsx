import Button from '@mui/joy/Button';
import { Sidebar } from "../user/user"
import "./sport.css"
import Table from '@mui/joy/Table';
import Input from '@mui/joy/Input';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
// import { Upload } from '../movie/upload';


const data = [
  {
    "name": "ZANAK",
    "disc": "For Jhanak, dance is the breath of her life! But a tragedy pushes her into a whirlwind of crushed dreams, failures, and a marriage of convenience.",
    "status": "Drama|Romance|Couples|Dance"
  },
  {
    "name": "UDNE KI ASHA",
    "disc": "A dreamy-eyed Sayali yearns for her prince charming. But when destiny ties her with hero-cum-thug Sachin, will her hopes for a fairytale life prevail?",
    "status": "Drama|Romance|Couples|Family"
  } 
]

const  Sport = () => {
  const [pageItem, setPageItem] = useState(5);
  const [currPage, setCurrPage] = useState(1);
  const [currData, setCurrData] = useState(data.slice(0, pageItem));
  // const [tableData, setTableData] = useState()

  useEffect(() => {
    const newData = data.slice((currPage - 1) * pageItem, currPage * pageItem);
    setCurrData(newData)
  }, [currPage])

  function nextData(e, page) {
    setCurrPage(page)
    console.log(page)
  }

  const tableRows = currData.map((item) => {
    return (
      <tr style={{ border: '1px solid black' }}>
        <td>{item.name}</td>
        <td>{item.disc}</td>
        <td>{item.status}</td>
        <td>
          <div className='threebtn'>
            <FaEye className='faeye' />
            <FaEdit className='faeye' />
            <MdDelete className='faeye' />
          </div>
        </td>
      </tr>
    )
  });

  return (
    <div className="tvtable">
      <Sidebar />
      <div className='tableorbtn'>
        <div className='twobutton'>
          <div className='typehere'>
            <Input placeholder="Movies,shows and more..." variant="soft" />
            <Button disabled className='search'><FaSearch />Search</Button>
          </div>
          <Link to="/admin/tv/upload"><Button disabled>Upload</Button></Link>
        </div>
        <div className='table'>
          <Table aria-label="basic table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>NAME</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>{tableRows}
            </tbody>
          </Table>
        </div>
        <Stack spacing={2} >
          <Pagination onChange={nextData} count={Math.ceil(data.length / pageItem)} variant="outlined" shape="rounded" />
        </Stack >
      </div>
    </div>

  )
}


export {Sport}

