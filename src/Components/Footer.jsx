import { Link } from "react-router";
export const Footer = () => {
    return (
        <footer
            className="bg-blue-100 py-6 text-center text-sm text-gray-700 text-xl dark:bg-[#072841] dark:text-white"
            role="contentinfo"
            aria-label="Footer"
            >
            <p>
                &copy; {new Date().getFullYear()} <strong>V-Office</strong> 
                {/* — All rights reserved. */}
            </p>
            <p className="mt-1">
                Need help?{' '} <br className="md:hidden"/>
                <Link to={'#'} 
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
                    Contact IT Support
                </Link>
            </p>
        </footer>
    );
}