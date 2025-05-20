import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anshuman from "./My_resume.pdf";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';
import { Link } from "react-router-dom";

export default function Hero() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const ctaRef = useRef(null);
    const socialRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(descriptionRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(ctaRef.current.children, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.3")
        .from(socialRef.current.children, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.3");

    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <div className="md:max-w-[1200px] px-6 m-auto md:flex justify-between sm:pt-[140px]
            h-[600px] font-poopins pt-[100px] md:h-screen md:pt-[120px] dark:bg-black">
                <div>
                    <div className="md:py-8 dark:text-green-400">
                        <p ref={titleRef} className="md:text-[64px] md:leading-tight text-3xl font-black font-poopins">
                        Hi, I'm Anshuman Prakash,<br/>
                        a Full-Stack Developer.
                        </p>
                    </div>

                    <section ref={descriptionRef} className="pt-6 dark:text-slate-300">
                        <p className="md:text-[20px] text-[13px] md:w-8/12">
                        "Building seamless digital experiences with React JS and Spring Boot.
                        I specialize in creating dynamic, responsive web applications that blend
                        powerful front-end interfaces with robust back-end solutions."
                        </p>
                    </section>

                    <div className="md:my-11 my-6">
                        <p className="font-black md:text-[24px] dark:text-slate-300">
                        Let's create something exceptional together.
                        </p>
                    </div>

                    <div ref={ctaRef} className="flex-col md:flex justify-center space-y-4 md:justify-start md:space-x-8 ">
                        <div className="flex space-x-8">
                            <button className="transition ease-out duration-500 bg-black md:h-10 h-8 text-white font-medium md:text-[24px] border 
                            rounded-full md:w-[180px] w-[120px] hover:bg-green-500 hover:text-slate-800 hover:font-bold dark:hover:border-black">
                                <Link to={"/allwork"}>View Work</Link>
                            </button>

                            <a href={Anshuman} download={Anshuman}><button className="hidden md:block transition ease-out duration-500 bg-transparent dark:text-white 
                                dark:border-white text-black font-medium md:text-[24px] border-2 border-black rounded-full md:w-[200px] w-[120px] hover:font-bold">
                                Download CV
                                </button></a>
                            
                        </div>

                        <div>
                            <a href={Anshuman} download={Anshuman}><button className="md:hidden flex transition ease-out duration-500 bg-transparent dark:text-white 
                                dark:border-white text-black font-medium md:text-[24px] border-2 border-black rounded-full md:w-[200px] w-[120px] hover:font-bold">
                                Download CV
                                </button></a>
                        </div>

                        <div ref={socialRef} className="md:hidden text-2xl flex space-x-7 md:justify-between w-3/12 dark:text-white">
                            
                            <div className="pb-4">
                                <a href="https://www.linkedin.com/in/anshuman-prakash-7a6008299/"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                            <div>
                                <a href="https://github.com/Anshuman-Prakash"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={socialRef} className="hidden md:text-5xl md:flex-col md:flex md:pt-[100px] cursor-pointer dark:text-white">
                    
                    <div className="pb-4">
                        <a href="https://www.linkedin.com/in/anshuman-prakash-7a6008299/"><FontAwesomeIcon className="hover:text-green-500" icon={faLinkedin}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/Anshuman-Prakash"><FontAwesomeIcon className="hover:text-green-500" icon={faGithub}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

