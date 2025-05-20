import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Omtamang from "./Omtamang.pdf";
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
        <div ref={containerRef} className="h-screen overflow-y-auto">
            <div className="px-4 sm:px-6 md:max-w-[1200px] mx-auto md:flex justify-between 
                min-h-screen py-8 sm:py-12 md:py-16 font-poopins dark:bg-black">
                <div className="w-full md:w-auto flex flex-col justify-center">
                    <div className="md:py-8 dark:text-green-400">
                        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-[64px] leading-tight font-black font-poopins">
                            Hi, I'm Anshuman Prakash,<br/>
                            a Full-Stack Developer.
                        </h1>
                    </div>

                    <section ref={descriptionRef} className="mt-4 sm:mt-6 dark:text-slate-300">
                        <p className="text-sm sm:text-base md:text-[20px] w-full sm:w-10/12 md:w-8/12">
                            "Building seamless digital experiences with React JS and JavaScript.
                            I specialize in creating dynamic, responsive web applications that blend
                            powerful front-end interfaces with robust back-end solutions."
                        </p>
                    </section>

                    <div className="mt-6 sm:mt-8 md:mt-11">
                        <p className="font-black text-lg sm:text-xl md:text-[24px] dark:text-slate-300">
                            Let's create something exceptional together.
                        </p>
                    </div>

                    <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                        <button className="transition ease-out duration-500 bg-black h-12 sm:h-10 text-white font-medium text-base sm:text-lg md:text-[24px] border 
                            rounded-full w-full sm:w-[180px] hover:bg-green-500 hover:text-slate-800 hover:font-bold dark:hover:border-black">
                            <Link to={"/allwork"}>View Work</Link>
                        </button>

                        <a href={Omtamang} download={Omtamang} className="block sm:inline-block w-full sm:w-auto">
                            <button className="transition ease-out duration-500 bg-transparent dark:text-white 
                                dark:border-white text-black font-medium text-base sm:text-lg md:text-[24px] border-2 border-black rounded-full w-full sm:w-[200px] h-12 sm:h-10 hover:font-bold">
                                Download CV
                            </button>
                        </a>
                    </div>

                    <div ref={socialRef} className="flex text-2xl space-x-6 mt-8 sm:mt-10 md:hidden dark:text-white">
                        <a href="https://www.linkedin.com/in/anshuman-prakash-7a6008299/" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className="hover:text-green-500 transition-colors"/>
                        </a>
                        <a href="https://github.com/Anshuman-Prakash" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} className="hover:text-green-500 transition-colors"/>
                        </a>
                    </div>
                </div>

                <div ref={socialRef} className="hidden md:flex md:flex-col md:justify-center md:text-5xl cursor-pointer dark:text-white">

                    <a href="https://www.linkedin.com/in/anshuman-prakash-7a6008299/" className="mb-6" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-green-500 transition-colors"/>
                    </a>
                    <a href="https://github.com/Anshuman-Prakash" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-green-500 transition-colors"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

