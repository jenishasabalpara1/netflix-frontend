import { Sidebar } from "../user/user"
import "./movie.css"
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Input from '@mui/joy/Input';
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
// import { Upload } from "./upload";
// import "./tv.css"

// const data = [ 
//     // {
//     //     "name": "HUMGAMA",
//     //     "disc": "The Kapoors, Bajajs and Tiwaris lead picture-perfect lives until a young woman named Vaani arrives with an utterly cute bundle of joy in tow.",
//     //     "status": "Comedy|Dramedy|Family-Friendly|Feel-Good"
//     // },
//     // {
//     //     "name": "TOTAL DHAMAAL",
//     //     "disc": "When 50 million bucks are at stake, six eccentric people will do whatever it takes, including braving the wild. Who will win this race against time?",
//     //     "status": "Comedy|Light-hearted|Sitcom|Slapstick"
//     // },
//     // {
//     //     "name": "LAXMII",
//     //     "disc": "Aasif's belief in logic and science shatters when he gets possessed by a ghost. What starts as a comical journey soon unearths a dark secret.",
//     //     "status": "Horror|Comedy|Action|Revenge"
//     // },
//     // {
//     //     "name": "MISSION MANGAL",
//     //     "disc": "Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt.",
//     //     "status": "Drama|Race Against Time|Girl Power|Gritty"
//     // },
//     // {
//     //     "name": "HOUSEFULL",
//     //     "disc": "In 1419, love between three couples succumbed to an evil ploy! As history repeats, they reincarnate after six centuries, albeit with the wrong partners.",
//     //     "status": "Comedy|Slapstick|Revenge|Gangster"
//     // },
//     // {
//     //     "name": "THE PAST",
//     //     "disc": "When a budding writer moves to a hill station to write her new book, little does she know that an evil plot is about to unfold and take her into the past.",
//     //     "status": "Horror|Mystery|Occult|Paranormal"
//     // },
//     // {
//     //     "name": "THE BIG BULL",
//     //     "disc": "During the late '80s, Hemant Shah, the man with the Midas touch, pulled off the biggest hustle that shook India's financial fabric. Inspired by true events.",
//     //     "status": "Crime|Drama|Biopic|Controversial"
//     // },
//     // {
//     //     "name": "TANHAJI",
//     //     "disc": "As Aurangzeb captures the Kondhana Fort, Tanhaji Malusare, Chhatrapati Shivaji Maharaj's trusted military leader and braveheart, ventures out to win it back.",
//     //     "status": "Drama|Historical|Period|Casual Viewing"
//     // },
//     // {
//     //     "name": "VIP-2",
//     //     "disc": "Civil engineer Raghuvaran is offered a job by Vasundhara, an egoistic businesswoman. When he turns down her offer, she vows to make his life miserable.",
//     //     "status": "Drama|Dramedy|Common-Man Struggles|Rivalry"
//     // },
//     // {
//     //     "name": "VIKRAN RONA",
//     //     "disc": "When a series of mysterious events stirs pandemonium in a village, an eccentric cop Vikrant Rona sets out to solve the case wherein everyone is under the radar.",
//     //     "status": "Action|Thriller|Drama|Crime"
//     // },
//     // {
//     //     "name": "THE EMPIRE",
//     //     "disc": "In the midst of scheming courtiers, ministers and a dead king, 14-year-old Babur steps up to his destiny and leaves an indelible mark on history.",
//     //     "status": "VDrama|Historical|Fantasy|Period"
//     // },
//     // {
//     //     "name": "AARYA ANTIM VAAR",
//     //     "disc": "The Sherni is back again, and she is all set to end it all. Will she succeed?",
//     //     "status": "Drama|Thriller|Mystery|Crime"
//     // },
//     // {
//     //     "name": "TUBELIGHT",
//     //     "disc": "Taking us back to the 1962 Sino-Indian War; this is the story of a disabled man, popularly known as Tubelight, his love for his family and self-belief.",
//     //     "status": "Drama|Period|Emotional|Family-Friendly"
//     // },
//     // {
//     //     "name": "PINK",
//     //     "disc": "When three single city girls meet a politician's kin and his friends, a night out becomes a nightmare, which then causes a clash of societal norms and justice.",
//     //     "status": "Drama|Thriller|Conspiracy|Courtroom"
//     // },
//     // {
//     //     "name": "GOLMAAL",
//     //     "disc": "Spinning a web of lies, four crooks seek shelter in a bungalow owned by a blind couple. But hilarity ensues when they all fall in love with a girl next door.",
//     //     "status": "Comedy|Drama"
//     // },
//     // {
//     //     "name": "TALVAR",
//     //     "disc": "A double murder case of a teenage girl and the family's domestic help shakes the nation. With many suspects and multiple theories, who is the real culprit?",
//     //     "status": "Drama|Mystery|Trauma|Conspiracy"
//     // },
//     // {
//     //     "name": "BAJRANGI BHAIJAAN",
//     //     "disc": "A simple guy, Pawan Kumar Chaturvedi, who is a Hanuman bhakt takes it upon himself to help a lost; mute girl, reach her home in Pakistan!",
//     //     "status": "Drama|Comedy|Light-hearted|Emotional"
//     // },
//     // {
//     //     "name": "BLOODY ISHQ",
//     //     "disc": "A secluded Scottish island becomes Neha's refuge after a memory loss in an accident. With her husband hiding a scary truth, how will she live in a house of lies?",
//     //     "status": "Horror|Drama|Thriller|Romance"
//     // },
//     // {
//     //     "name": "LOOTCASE",
//     //     "disc": "Nandan Kumar's life is thrown into chaos when he finds a suitcase full of cash. Kya iss bag mein kuch kaala hai?",
//     //     "status": "Comedy|Drama|Dramedy|Light-hearted"
//     // },
//     // {
//     //     "name": "LOOTERA",
//     //     "disc": "Unaware of Varun’s intentions, Pakhi decides to marry him. Left at the altar, she must face his harsh truth.",
//     //     "status": "Romance|Drama|Period|Emotional"
//     // },
//     // {
//     //     "name": "PAANGA",
//     //     "disc": "A forgotten Kabaddi world champion catalyzes an inner desire to give a new meaning to her existing role as a wife and mother, and makes a comeback.",
//     //     "status": "Sports|Drama|Family|Casual Viewing"
//     // },
//     // {
//     //     "name": "SON OF SARDAAR",
//     //     "disc": "Jassi falls head over heels in love with Sukhmit, only to discover her family is out to finish him over an old family feud. How will love triumph over revenge?",
//     //     "status": "Comedy|Drama|RomCom|Humour"
//     // },
//     // {
//     //     "name": "KARMAA CALLING",
//     //     "disc": "Nothing matters when the world is at your feet. But can anyone really cheat one's karma?",
//     //     "status": "Drama|Thriller|Conspiracy|Dysfunctional Relationships"
//     // },
//     // {
//     //     "name": "GHAR WAPSI",
//     //     "disc": "After being sacked from work, Shekhar moves in with his parents. Back to roots in Indore, will life turn fruitful? Or is ‘home sweet home’ a thing of the past?",
//     //     "status": "Drama|Family|Common-Man Struggles|Self-discovery"
//     // },
//     // {
//     //     "name": "BHOOT POLICE",
//     //     "disc": "Two brothers Vibhooti and Chiraunji have ‘fought’ their share of ghosts. However, a new case forces them to rethink their own abilities and beliefs.",
//     //     "status": "Horror|Comedy|Dramedy|Paranormal"
//     // },
//     // {
//     //     "name": "ARJUN READY",
//     //     "disc": "A short-tempered yet brilliant young medical surgeon immerses himself in drugs and alcohol when his lady-love is forced to marry someone else.",
//     //     "status": "Romance|Tragedy|Campus Caper|Casual Viewing"
//     // },
//     // {
//     //     "name": "TRIAL",
//     //     "disc": "Noyonika Sengupta faces a trial by fire when her family gets hit by a scandal. Watch her defend them in life and in the courtroom.",
//     //     "status": "Drama|Couples|Emotional|Family-Friendly"
//     // }
// ]

const Movie = () => {

    const [pageItem, setPageItem] = useState(5);
    const [currPage, setCurrPage] = useState(1);
    const [data, setData] = useState([]);
    const [currData, setCurrData] = useState(data.slice(0, pageItem));

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5100/netfilx/fatch');
            setData(result.data.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newData = data.slice((currPage - 1) * pageItem, currPage * pageItem);
        setCurrData(newData)
    }, [data, currPage])


    function nextData(e, page) {
        setCurrPage(page)
        console.log(page)
    }

    const handelDelete = (id) => {
        const updateData = currData.filter((item) => item.id !== id);
        setData(updateData)
    }

    const tableRows = currData.map((item) => {
        return (
            <tr style={{ border: '1px solid black' }}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.type.join(', ')}</td>
                <td>
                    <div className='threebtn'>
                        <FaEye className='faeye' />
                        <FaEdit className='faeye' />
                        <MdDelete className='faeye' onClick={() => handelDelete(item.id)} />
                    </div>
                </td>
            </tr>
        )
    });

    return (
        <>
            <div className="tvtable">
                <Sidebar />
                <div className='tableorbtn'>
                    <div className='twobutton'>
                        <div className='typehere'>
                            <Input placeholder="Movies,shows and more..." variant="soft" />
                            <Button disabled className='search'><FaSearch />Search</Button>
                        </div>
                        <Link to="/admin/movie/upload"><Button disabled>Upload</Button></Link>
                    </div>
                    <div className='table'>
                        <Table aria-label="basic table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>NAME</th>
                                    <th>DESCRIPTION</th>
                                    <th>ACTION</th>
                                    <th>STATUS</th>
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
        </>
    )
}
export { Movie }