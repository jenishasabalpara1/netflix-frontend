import Button from '@mui/joy/Button';
import { Sidebar } from "../user/user"
import "./tv.css"
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
    "name": "RADHA KRISHNA",
    "disc": "Radha and Krishna are the epitome of eternal love and sacrifice, transcending eras and emotions. Here's a never-seen-before retelling of this supreme romance.",
    "status": "Mythology|Dramedy|Period|Drama"  
  },
  {
    "name": "GUM HAI KISIKE PYAAR MAIN",
    "disc": "Reeling from the past, Savi finds comfort in her new job as a teacher. Forming an unlikely bond with her young student Saisha, a new chapter awaits Savi.",
    "status": "Romance|Family-Friendly| Dysfunctional Relationships| Love Triangle"
  },
  {
    "name": "ANUPAMA",
    "disc": "Years after the Aasha Bhawan tragedy, Anupama yearns to meet her daughter. For Adhya, life is a challenge as a tourist guide. Will fate bring them together?",
    "status": "Drama|Common-Man Struggles|Family-Friendly|Dysfunctional Relationships"
  },
  {
    "name": "YEH RISHTA KYA KAHELATA HAIN",
    "disc": "Following in her mother’s footsteps, Abhira aspires to be a lawyer. And for Ruhi, love equals everything! What happens when their lives intertwine with Armaan?",
    "status": " Drama|Dramedy|Couples|Emotional"  
  },
  {
    "name": "ZANAK",
    "disc": "For Jhanak, dance is the breath of her life! But a tragedy pushes her into a whirlwind of crushed dreams, failures, and a marriage of convenience.",
    "status": "Drama|Romance|Couples|Dance"
  },
  {
    "name": "UDNE KI ASHA",
    "disc": "A dreamy-eyed Sayali yearns for her prince charming. But when destiny ties her with hero-cum-thug Sachin, will her hopes for a fairytale life prevail?",
    "status": "Drama|Romance|Couples|Family"
  },
  {
    "name": "DIL KO TUMSE PYAAR HUA",
    "disc": "Destiny’s ‘favourite child’ Deepika is let down by society’s stigma around beauty! But a new journey begins as prince-charming Dr. Chirag enters her life.",
    "status": "Drama|Romance|Couples|Tough Girls"
  },
  {
    "name": "MAHABHARAT",
    "disc": "The mother of all wars, the epitome of all rivalries, the cauldron of emotions, insecurities, jealousies, and power play - Mahabharat!",
    "status": "Mythology|Dramedy|Period|Drama" 
  },
  {
    "name": "ISHQBAAZ",
    "disc": "Brothers Shivaay, Omkara and Rudra share an unbreakable bond despite their dysfunctional family. What happens when cupid strikes each of them?",
    "status": "Family|RomCom|Couples|Dysfunctional Relationships"    
  },
  {
    "name": "YEE HAIN MOHHABATE",
    "disc": "Based on Manju Kapoor's Custody, this is the story of Raman and Ishita, brought together by destiny and their love for Ruhi, Raman's daughter from his ex-wife.",
    "status": "Romance|Family|Couples|Emotional"     
  },
  {
    "name": "SATHIYAA",
    "disc": "A few years after Anant's death, Gehna has completely turned her life around. In this new journey, will she finally find her perfect partner?",
    "status": "Family|Couples|Family-Friendly|Rich Vs. Poor"    
  },
  {
    "name": "DIYA OUR BAATI HUM",
    "disc": "Sooraj, a loving husband and a self-made man from a traditional family helps his ambitious wife, Sandhya achieve her dreams of becoming an IPS officer.",
    "status": "Drama|Romance|Couples|Family-Friendly"
  },
  {
    "name": "ISS PYAAR KO KYA NAME DUU",
    "disc": "A perfect story of opposites attract, where Khushi, a simple girl and Arnav, an arrogant businessman realise that they cannot live without each other.",
    "status": "Romcom|Romance|Couples|Family-Friendly"
  },
  {
    "name": "EK HAJARO MAIN MERI BAHENA HAIN",
    "disc": "Sisters Maanvi and Jeevika can go to any lengths for each other. Follow the sisters’ journey as they stand by each other and find their soulmates.",
    "status": "Romcom|Family|Couples|Family-Friendly"
  },
  {
    "name": "IMALI",
    "disc": "A bar singer by night, village-belle Imlie navigates the hardships of life. Soon, her paths cross with business-minded Agastya, and a new chapter begins.",
    "status": "Family|Drama|Dysfunctional Relationships|Dramedy"  
  },
  {
    "name": "PANDYA STORE",
    "disc": "Years after the tragedy, Natasha grows up to be a strong and independent woman. Amid new challenges, will she be able to keep up the legacy of Pandyas?",
    "status": "Drama|Family|Common-Man Struggles|Family-Friendly" 
  },
  {
    "name": "YEH HAI CHAHTE",
    "disc": "Heartbroken but strong-willed, Kaashvi finds solace in her work. Years later, her paths cross with Arjun! Will it rekindle lost love or deepen the wounds?",
    "status": "Drama|Conspiracy|Con Stories|Couples" 
  },
  {
    "name": "YEH RISTE HAI PYYAR KE",
    "disc": "Lovebirds Abir and Mishti embark upon the journey called 'life'. Watch them heal the fissures in their family, putting everything on the line, even their love.",
    "status": "Drama|Family|Couples|Emotional"   
  },
  {
    "name": "NAMKARN",
    "disc": "An illegitimate child, Avni sets out to create an identity for herself amidst numerous hurdles created by her own grandmother, Dayavanti.",
    "status": "Comedy|Coming-of-Age|Conspiracy|Couples"  
  },
  {
    "name": "LOOTERA",
    "disc": "Unaware of Varun’s intentions, Pakhi decides to marry him. Left at the altar, she must face his harsh truth.",
    "status": "Romance|Drama|Period|Emotional"
  },
  {
    "name": "YEH JADU HAIN JIN KA",
    "disc": "He lives under the shadow of a djinn while she is blessed with angelic qualities. What turn will Aman and Roshni's life take when the two fall in love?",
    "status": "Romance|Fantasy|RomCom|Magical"   
  },
  {
    "name": "SON OF SARDAAR",
    "disc": "Jassi falls head over heels in love with Sukhmit, only to discover her family is out to finish him over an old family feud. How will love triumph over revenge?",
    "status": "Comedy|Drama|RomCom|Humour"
  },
  {
    "name": "KARMAA CALLING",
    "disc": "Nothing matters when the world is at your feet. But can anyone really cheat one's karma?",
    "status": "Drama|Thriller|Conspiracy|Dysfunctional Relationships"
  },
  {
    "name": "GHAR WAPSI",
    "disc": "After being sacked from work, Shekhar moves in with his parents. Back to roots in Indore, will life turn fruitful? Or is ‘home sweet home’ a thing of the past?",
    "status": "Drama|Family|Common-Man Struggles|Self-discovery"
  },
  {
    "name": "BHOOT POLICE",
    "disc": "Two brothers Vibhooti and Chiraunji have ‘fought’ their share of ghosts. However, a new case forces them to rethink their own abilities and beliefs.",
    "status": "Horror|Comedy|Dramedy|Paranormal"
  },
  {
    "name": "ARJUN READY",
    "disc": "A short-tempered yet brilliant young medical surgeon immerses himself in drugs and alcohol when his lady-love is forced to marry someone else.",
    "status": "Romance|Tragedy|Campus Caper|Casual Viewing"
  },
  {
    "name": "TRIAL",
    "disc": "Noyonika Sengupta faces a trial by fire when her family gets hit by a scandal. Watch her defend them in life and in the courtroom.",
    "status": "Drama|Couples|Emotional|Family-Friendly"
  }

]

const Tv = () => {
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


export { Tv }








{/* <Table aria-label="basic table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>NAME</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currData.map((item) => (
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
              ))}
            </tbody>

          </Table> */}
