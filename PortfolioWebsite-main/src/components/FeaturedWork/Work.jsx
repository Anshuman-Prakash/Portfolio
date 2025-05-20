import { Link } from "react-router-dom"
import { useAuth } from "../Security/Authcontext"


export default function Work() {
    const authContext = useAuth()
    const mode = authContext.mode
    return (
        <div className={`${mode && "dark"}`}>
        <div className=" md:max-w-[1200px] max-w-[400px] m-auto h-auto ">
            <div className="pt-11 text-center font-poopins text-[36px] dark:text-white">
                <p>Featured Work</p>
            </div>

                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-8 mt-8 font-poopins text-sm dark:text-white px-7">
                           <a href="https://github.com/Anshuman-Prakash/Paste-WebApp">
                             <div>
                                <img alt="Paste App" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="/img/paste_img.png"/>
                                <p className="pt-2">Paste App</p>
                            </div>
                           </a>

                            <a href="https://github.com/Anshuman-Prakash/Weather-WebApp/tree/master">
                                <div>
                                    <img alt="weather app" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover" src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024"/>
                                    <p className="pt-2">Weather App</p>
                                </div>
                            </a>

                            <a href="https://github.com/Anshuman-Prakash/Quiz-WebApp">
                                <div>
                                    <img alt="Quiz App" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="/img/quiz_im.png"/>
                                    <p className="pt-2">Quiz App</p>
                                </div>
                            </a>
                        </div>

            <div className="md:mt-[80px] mt-11 text-center font-poopins w-full pb-11">
                <button className="transition ease-out duration-500 text-black dark:text-slate-300 font-light md:text-[36px] animate-bounce
                 rounded-xl hover:text-gray-500 underline underline-offset-8 decoration-1 hover:decoration-2">
                    <Link to={"/allwork"}>See More Work</Link>
                </button>
            </div>
        </div>
        </div>
    )
}