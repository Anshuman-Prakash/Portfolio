import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Allwork from "./FeaturedWork/Allwork"
import AuthProvider from "./Security/Authcontext";
import Pagenotfound from "./PageNotFound/Pagenotfound";
import Aboutme from "./About/Aboutme";
import Hireme from "./HireMe/Hireme";


export default function Portfolio(){
    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/allwork" element={<Allwork/>}/>
                        <Route path="/about" element={<Aboutme/>}/>
                        <Route path="*" element={<Pagenotfound/>}/>
                        <Route path="/hireme" element={<Hireme/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}