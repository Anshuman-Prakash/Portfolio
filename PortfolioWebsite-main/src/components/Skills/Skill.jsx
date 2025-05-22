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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"/>
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
                            <img alt="Git" className="border rounded-full md:w-[80px]"
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Git</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use GitHub to collaborate on projects, manage code efficiently, and track version control for smooth development workflows."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Redux.js" className="border rounded-full md:w-[80px] object-contain"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYiSZ7pgNHIi4X9la9Z1_oHsBpntPBeY6fA&s"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Redux.js</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use Redux to manage and centralize application state efficiently, enabling predictable and maintainable state management across complex user interfaces."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Node.js" className="border rounded-full md:w-[80px] object-contain"
                            src="https://www.mindrops.com/images/nodejs-image.webp"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Node.js</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use Node.js to develop high-performance, scalable server-side applications using JavaScript, allowing efficient handling of concurrent requests."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="Express.js" className="border rounded-full md:w-[80px] object-contain"
                            src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Express.js</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use Express.js to build fast, scalable server-side applications and RESTful APIs with a minimalist and flexible Node.js framework."</p>
                    </div>

                    <div className="skill-card bg-white h-[210px] md:max-w-[400px] dark:bg-slate-700 dark:text-white md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2 transition-shadow duration-300">
                        <div className="w-full h-[100px] flex justify-center md:pt-3">
                            <img alt="MongoDB" className="border rounded-full md:w-[80px] object-contain"
                            src="https://d7umqicpi7263.cloudfront.net/img/product/3234cf5e-bb80-434b-be76-15dfe37f98aa.com/a072bd3d79231de1e28b5be2fdd803c1"/>
                        </div>
                        <p className="text-center md:text-[20px] md:pt-2 text-[20px]">MongoDB</p>
                        <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11 dark:text-slate-300">"I use MongoDB to store and manage data in a flexible, scalable NoSQL database, ideal for handling large volumes of unstructured or semi-structured data."</p>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

