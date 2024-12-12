import { useState } from 'react';
import logo from '../../Assests/logo.svg'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    const [navOpen, setnavOpen] = useState(false)
    return (
        <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-zinc-900'>
            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
                <h1>
                    <a href="/" className='logo'>
                        <img src={logo} height={40} width={150} alt="Rachit" className='' />
                    </a>
                </h1>
                <div className='relative md:justify-self-center'>
                    <button className='menu-btn md:hidden' onClick={()=>{setnavOpen((prev)=>!prev)}}>
                        <span className='material-symbols-rounded'>
                            {navOpen ? 'close' : 'menu'} </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a>
            </div>
        </header>
    )
}

export default Header;