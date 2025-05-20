import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <div className="bg-black md:pt-[100px] mt-11 h-auto md:h-screen">
            <div className="md:max-w-[1200px] m-auto md:text-4xl md:w-full w-[400px] md:pt-[150px] text-white font-poopins py-8 md:py-11 text-center">
                <p>Interested in working together?<br/> Drop me a message and let’s bring your ideas to life.</p>
            </div>

            <div className="pb-8 text-center">
                <button className="text-white font-poopins md:text-4xl underline underline-offset-8 decoration-1 hover:text-gray-400 hover:decoration-2">
                    Get in touch
                </button>
            </div>

            {/* socials */}

            <div className="text-center md:flex md:flex-row flex justify-evenly m-auto mt-11 md:mt-[150px]">
                <div>
                    <div className="text-white text-start md:text-2xl w-[400px] m-auto">
                        <FontAwesomeIcon icon={faLocation}/>
                    </div>
                    <div>
                        <p className="text-white text-start text-sm pt-2 font-mono font-medium w-[400px] m-auto"><br/>DARBHANGA, BIHAR</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="text-white">
                    <div className="text-start text-sm font-mono font-medium md:w-full w-[400px] m-auto">
                        SOCIAL
                    </div>

                    <div className="md:flex-col flex-col text-start md:mt-0 mt-1 text-2xl md:justify-between w-[400px] m-auto md:w-[200px] md:text-3xl md:pt-3 cursor-pointer">

                        <div>
                            <FontAwesomeIcon className="hover:text-gray-400" icon={faLinkedin}/>
                        </div>

                        <div>
                            <FontAwesomeIcon className="hover:text-gray-400" icon={faGithub}/>
                        </div>
                    </div>
                </div>
                {/* social links ends here */}
            </div>
            {/* socils ends here */}
        </div>
    )
}