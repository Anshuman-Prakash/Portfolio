import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { useAuth } from "../Security/Authcontext";


export default function Headertest() {
    const [isOpen, setOpen] = useState() 

    const toggleMenu = () => {
        setOpen(!isOpen);
    }
    const authContext = useAuth()
    const mode = authContext.mode
    console.log(isOpen)

    function toggleMode() {
        authContext.toogle()
    }

    const activeLink = 'text-green-500';
    const normalLink = ''

    return (
        <header className={`${mode && "dark"} fixed z-20 md:flex md:justify-center w-full md:w-full bg-[#FFFEBC] dark:bg-black`}>
            <nav className=" flex justify-between w-full vsm:space-x-[100px] sm:space-x-[110px] px-11 py-8 md:w-[1200px] md:m-auto">
                
                <ul className="md:flex hidden justify-between w-4/12 font-medium cursor-pointer dark:text-white pt-2">
                    <li className="hover:text-green-500"><NavLink to={'/'} className={({isActive}) => 
            isActive ? activeLink : normalLink}>Home</NavLink></li>
                    <li className="hover:text-green-500"><NavLink to={'/allwork'} className={({isActive}) => 
            isActive ? activeLink : normalLink}>Work</NavLink></li>
                    <li className="hover:text-green-500"><NavLink to={'/about'} className={({isActive}) => 
            isActive ? activeLink : normalLink}>About me</NavLink></li>
                    <li className="transition ease-out duration-500 dark:bg-slate-500
                        bg-black text-white rounded-xl font-bold text-center p-1 w-[90px] hover:text-slate-800 hover:bg-green-500"><NavLink to={'/hireme'}>HIRE ME</NavLink></li>
                </ul>
                <button className=" transition ease-out duration-500 font-bold items-center
                        text-white rounded-full  md:text-2xl  hover:text-green-500"
                        onClick={toggleMode}>
                            {mode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon className="text-black hover:text-green-500" icon={faSun}/>}
                    </button>
                <div className="md:hidden">
                    <FontAwesomeIcon icon={faBars} className="dark:text-white" onClick={toggleMenu}/>
                </div>

            </nav>
            {isOpen ? 
                    (
                        <ul className="text-center flex-row space-y-2 font-poopins text-[14px] bg-[#FFFEBC] dark:bg-black dark:text-white pb-6 font-medium ">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/allwork'}>Work</NavLink></li>
                            <li><NavLink to={'/about'}>About me</NavLink></li>
                            <li className="transition ease-out duration-500 dark:bg-slate-500
                        bg-black text-white rounded-2xl w-[130px] m-auto hover:text-slate-800 hover:bg-green-500"><div>
                            <NavLink to={'/hire'}>HIRE ME</NavLink>
                        </div></li>
                        </ul>
                    ): null}
        </header>
    )
}