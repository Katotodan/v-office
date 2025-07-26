import { useState, useEffect } from "react";
import largerBannerImg from '../assets/larger-pc-banner.jpg';
import pcImg from '../assets/pc-banner.jpg';
import tabletImg from '../assets/tablet-banner.jpg';
import mobileImg from '../assets/phone-banner.jpg';

export const WelcomeBanner = () =>{
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100); // Delay for smooth entrance
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <div className="py-10 md:px-5 md:py-20 relative" role="region" aria-labelledby="welcome-heading">
            <img src={mobileImg} alt="Backgroud img" className="absolute top-0 left-0 w-full h-full object-cover z-0 md:hidden"/>
            <img src={tabletImg} alt="Backgroud img" className="absolute top-0 left-0 w-full h-full object-cover z-0 
            hidden md:block lg:hidden"/>
            <img src={pcImg} alt="Backgroud img" className="absolute top-0 left-0 w-full h-full object-cover z-0
            hidden lg:block xl:hidden"/>
            <img src={largerBannerImg} alt="Backgroud img" className="absolute top-0 left-0 w-full h-full object-cover z-0
            hidden xl:block"/>
            <div className="relative ">     
                <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
                    <span className="inline bg-blue-300 text-white px-2 py-1 rounded">
                        Welcome to V-Office, <span>Mikel</span>!
                    </span>
                </h1>
                <br />
                <div className={`transform transition-all duration-700 ease-out text-white 
                    ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-xl md:text-3xl font-bold text-center">
                        <span className="inline px-2 rounded ">
                            Connect & Collaborate
                        </span>
                    </p>
                    <p className="text-xl md:text-3xl font-bold text-center">
                        <span className="inline px-2 rounded ">
                            Your digital workspace for seamless teamwork and productivity.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}