import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./Sign In/signin"
import Home from "./home"
import { SignUp } from "./SignUp/signup"
import { Planform } from "./planform/planform"
import { Show } from "./Show/show"
import { Viewlatest } from "./Show/viewlatest"
import { Celebrationview } from "./Show/celelatest"
import { After } from "./Show/after"
import {Admin} from "./admin/adminpage"
import { Submit } from "./Submit/submit"
import User from "./user/user"
import { Movie } from "./movie/movie"
import { Tv } from "./tv/tv"
import { Sport } from "./sport/sport"
import { Upload } from "./movie/upload"
import { UploadTV } from "./tv/Upload/uploadtv"


const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
               <Route path="/signin" element={<Signin />} />
            </Routes>
            <Routes>
               <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            <Routes>
               <Route path="/signup/planform" element={<Planform/>}/>
            </Routes>
            <Routes>
               <Route path="/show" element={<Show/>}/>
            </Routes>
            <Routes>
               <Route path="/show/latest" element={<Viewlatest/>}/>
            </Routes>
            <Routes>
               <Route path="/show/celelatest" element={<Celebrationview/>}/>
            </Routes>
            <Routes>
             <Route path="/show/:id" element={<After/>}/>
            </Routes>
            <Routes>
               <Route path="/admin" element={<Admin/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/home" element={<Submit/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/user" element={<User/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/tv" element={<Tv/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/movies" element={<Movie/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/sport" element={<Sport/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/movie/upload" element={<Upload/>}/>
            </Routes>
            <Routes>
               <Route path="/admin/tv/upload" element={<UploadTV/>}/>
            </Routes>
         </BrowserRouter >

         

      </>
   )
}

export default App