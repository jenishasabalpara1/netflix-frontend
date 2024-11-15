import "./submit.css"
import Button from '@mui/joy/Button';
import { Link } from "react-router-dom";
import Avatar from '@mui/joy/Avatar';

const Submit = () => {
    return (
        <div className="sidebar">
             <div className='side'>
                <Avatar color="primary" />
                <h5 className='name'>NAME</h5>
                </div>
                <Link to="/admin/user"><Button className="user">User</Button></Link>
                <Link to="/admin/tv"><Button className="user">TV</Button></Link>
                <Link to="/admin/movies"><Button className="user">Movies</Button></Link>
                <Link to="/admin/sport"><Button className="user">Sport</Button></Link>
            </div>
    )
}
export { Submit }