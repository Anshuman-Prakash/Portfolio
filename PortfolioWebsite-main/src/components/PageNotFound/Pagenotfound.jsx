import Footer2 from "../Footer/Footer2";
import Headertest from "../Header/Headertest";
import { useAuth } from "../Security/Authcontext";


export default function Pagenotfound(){
    const authContext = useAuth();
    const mode = authContext.mode

    return(
        <div className={`${mode && "dark"}`}>
            <Headertest/>
            <div className="h-screen md:flex flex px-11 pt-[100px] justify-center items-center dark:bg-black dark:text-white md:space-x-3">
                <h1 className=" md:text-5xl md:font-poopins">Page Not Found</h1>
                <img alt="robot" className="md:h-[500px] h-[200px]"
                 src="https://static.vecteezy.com/system/resources/previews/036/451/531/original/cartoon-broken-robot-png.png"/>
            </div>
            <Footer2/>
        </div>
    )
}