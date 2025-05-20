import { useAuth } from "../Security/Authcontext"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Skill() {
    const authContext = useAuth()
    const mode = authContext.mode
    const containerRef = useRef(null)

    useGSAP(() => {
        const skillCards = gsap.utils.toArray('.skill-card')
        
        skillCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                },
                delay: index * 0.1 // Stagger the animations
            })
        })
    }, { scope: containerRef })

    return (
        <div className={`${mode && "dark"}`} ref={containerRef}>
            <div className="md:min-h-screen bg-slate-100 dark:bg-slate-900 py-11 px-6">
                <div className="font-poopins text-center mb-9 text-black">
                    <h2 className="md:text-[36px] text-[20px] dark:text-white">My Skills</h2>
                    <p className="md:text-sm text-[14px] font-light dark:text-slate-300">Things I am good at</p>
                </div>

                <div className="md:max-w-[1200px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-5 md:gap-9">
                    <div className="skill-card bg-white h-[210px] rounded-xl dark:bg-slate-700 dark:text-white shadow-md md:max-w-[400px] md:h-[250px] md:rounded-2xl md:shadow-2xl hover:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="HTML" className="border rounded-full md:w-[80px]"
                            src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">HTML5</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use HTML to create clean, structured layouts, turning ideas into functional, accessible web experiences."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl md:shadow-2xl shadow-md p-2 transition-shadow duration-300">
                        <div className="md:w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Tailwind CSS" className="border w-[105px] rounded-full md:h-[80px] md:w-[80px] object-cover"
                            src="https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Tailwind CSS</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use Tailwind CSS to quickly design responsive, modern interfaces with clean, efficient code."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl md:shadow-2xl shadow-md p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="React JS" className="border rounded-full md:w-[80px]"
                            src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">React JS</p>
                        <p className="text-center md:text-sm text-slate-500 font-light md:pt-2 md:px-11 text-[9px] dark:text-slate-300">"I build dynamic, interactive web applications with React JS, focusing on performance and a seamless user experience."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="SpringBoot" className="border rounded-full md:w-[80px]"
                            src="https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">JavaScript</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I develop robust, scalable systems with JavaScript, ensuring smooth and efficient performance for web applications."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Github" className="border rounded-full md:w-[80px]"
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Git</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use GitHub to collaborate on projects, manage code efficiently, and track version control for smooth development workflows."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Bootstrap" className="border rounded-full md:w-[80px] object-contain"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Bootstrap</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use Bootstrap to quickly create responsive, mobile-first websites with consistent, modern designs."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

