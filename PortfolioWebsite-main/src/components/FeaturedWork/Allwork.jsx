import Footer2 from "../Footer/Footer2"
import Headertest from "../Header/Headertest"
import { useAuth } from "../Security/Authcontext"

export default function Allwork() {

    const authContext = useAuth()
    const mode = authContext.mode
    return (
        <div className={`${mode && "dark"} `}>
            {/* Header */}
            <div className="bg-white">
                <Headertest/>
            </div>

            {/* AllWOrk */}
            <div className="dark:bg-slate-900 pb-11">
                <div className=" md:max-w-[1200px] max-w-[400px] m-auto h-auto pt-[100px]">
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

                            <a href="https://github.com/Anshuman-Prakash/Ecomme">
                                <div>
                                    <img alt="Ecomme" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg"/>
                                    <p className="pt-2">Ecomme</p>
                                </div>
                            </a>

                            <a href="https://github.com/Anshuman-Prakash/Coinify">
                                <div>
                                    <img alt="Coinify" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="https://sterlingmint.co.uk/wp-content/uploads/2023/09/Coin-Collecting-scaled.jpg"/>
                                    <p className="pt-2">Coinify</p>
                                </div>
                            </a>

                            <a href="https://github.com/Anshuman-Prakash/LoveurDays">
                                <div>
                                    <img alt="LoveurDays" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/464992625.jpg?k=24c033dd7b8b4c16ee0d7adc789c9ff7af5a82851e59386f521f0090d6dd0b4f&o=&hp=1"/>
                                    <p className="pt-2">LoveurDays</p>
                                </div>
                            </a>
                        </div>
                </div>
            </div>

            {/* FOOTER */}

            <div>
                <Footer2/>
            </div>
        </div>
    )
}