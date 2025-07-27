import { Navbar } from "./Navbar";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
export const Layout = () => {
    return (
        <div className="main-container min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <Navbar />
            <main className="flex-grow dark:bg-neutral-900 dark:text-white">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}