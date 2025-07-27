import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import {FaUserCircle } from 'react-icons/fa';
import { NotificationDropdown } from './NotificationDropdown';
import { useLocation } from 'react-router';


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    let location = useLocation();
    const avatarButtonRef = useRef(null);
    const menuContentRef = useRef(null)
    

    // Watch window resize and auto-close mobile menu on large screens
    useEffect(() => {
        const handleResize = () => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);
        if (!mobile) setIsMenuOpen(false); // close menu on desktop
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (
                menuContentRef.current &&
                !menuContentRef.current.contains(event.target) &&
                avatarButtonRef.current &&
                !avatarButtonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location]);

    // Hide the main elements when the menu is open on mobile
    useEffect(() => {
        if (isMobile && isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
        return () => {
            document.body.style.overflow = 'auto'; // Reset on unmount
        };
    }, [isMobile, isMenuOpen]);

    const toggleMenu = () => { 
        if (!isMobile) return; // Do not toggle on desktop
        setIsMenuOpen(!isMenuOpen);
    }
    const handleLogout = (e) => {
        e.preventDefault();
        // Add your logout logic here
        console.log("User logged out");
    };
    
  return (
    <header className='flex justify-between h-20 bg-sky-50 items-center px-4 text-xl lg:px-8 xl:px-16 xl:gap-10
    dark:bg-[#072841] dark:text-white overflow-clip'
      role="navigation"
      aria-label="Main Navigation"
    >
        {/* Logo */}
        <div className='flex items-center gap-2'> 
            <Link to='/dashboard'>
                <img src={logo} alt="V-Office logo" className='w-10 h-10 md:w-15 md:h-15 rounded-full' />
            </Link>
            <h1 className="font-semibold">V-Office</h1>
        </div>

        {/* Right Section */}

        <nav className='lg:flex lg:flex-row-reverse lg:relative lg:gap-4' role="menubar"> 
            {/* Top Icons */}
            <ul className='flex items-center gap-4'> 
                <li className="relative group">
                    <NotificationDropdown />
                </li>
                {/* User Avatar */}
                 <li>
                    <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu, user profile"
                    className="w-15 h-15 flex items-center justify-center text-gray-700 dark:text-[#eee] focus:outline-none cursor-pointer"
                    ref={avatarButtonRef}
                    >
                    <FaUserCircle className="w-10 h-10 md:w-15 md:h-15"/>
                    </button>
                </li>
            </ul>

            {/* Dropdown or Inline Menu */}

            <div className={ ` ${isMenuOpen && isMobile ? 'translate-x-0' : isMobile ? 'translate-x-full' : ''}
            flex flex-col items-center absolute top-20 right-0 bg-sky-50 w-full h-[calc(100dvh_-_80px)] gap-6 z-50
            transition-transform duration-300 ease-in-out md:transition-none md:gap-8
            lg:translate-x-0 lg:static lg:flex-row lg:bg-transparent lg:h-auto lg:w-auto lg:gap-2  lg:gap-30 xl:gap-[12rem]
            dark:bg-[#072841] dark:text-white overflow-y-auto pb-2
            `} 
            ref={menuContentRef}
            >
                {/* Navigation Links */}
                <ul className='flex gap-6 flex-col items-center pt-6 lg:flex-row lg:pt-0 md:gap-8 xl:gap-15'>
                    <li>
                        <Link to="/dashboard" className='block cursor-pointer hover:border-b p-1 border-sky-500' role="menuitem">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to='/team-chat' className='block cursor-pointer hover:border-b p-1 border-sky-500' role="menuitem">
                            Team chat
                        </Link>
                    </li>
                    <li>
                        <Link to='/tasks' className='block cursor-pointer hover:border-b p-1 border-sky-500' role="menuitem">
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link to='/resources' className='block cursor-pointer hover:border-b p-1 border-sky-500' role="menuitem">
                            Resources
                        </Link>
                    </li>
                </ul>
                {/* Theme and Logout */}
                <ul className='flex gap-6 flex-col items-center lg:flex-row-reverse lg:gap-6 xl:gap-10'> 
                    {/* <li aria-label='Light mode toggle button'><FaSun/></li> */}
                    <li>
                        <form action="" onSubmit={handleLogout}>
                            <button className='block bg-red-600 hover:bg-red-700 dark:bg-red-500 px-4 py-2 rounded-md' 
                            aria-label="Log out" type='submit'>
                                Logout
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
      </nav>
    </header>
  );
};

   