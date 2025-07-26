import { Link } from "react-router";
import notifications from "../data/notifications"; // Assuming you have a notifications data file
import { FaBell} from 'react-icons/fa';

export const NotificationDropdown = () =>{
    const endIndex = notifications.length > 3 ? 3 : notifications.length;
    const firstRecentNotifications = notifications.slice(0, endIndex)?.map(notification => { 
        return (
            <li key={notification.id} className="truncate dark:text-white">
                {notification.title}
            </li>
        );
    });
    return (
        <>
            <button
            aria-label="Notifications"
            className="block relative focus:outline-none"
            >
                <FaBell className="w-7 h-7 dark:text-[#eee] text-gray-700 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                    3
                </span>
            </button>

             <div className="absolute -right-15 md:right-0 mt-3 w-[22rem] md:w-64 bg-sky-50 dark:border-none border border-gray-200 rounded-lg shadow-lg opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50
            dark:bg-[#072841] dark:text-white overflow-y-auto pb-2">
                {firstRecentNotifications.length > 0 ? 
                    <ul className="text-lg text-gray-700 p-3 space-y-2 w-full">
                        {firstRecentNotifications}
                        {
                            notifications.length > 3 && 
                            <Link to="/notification" className="text-blue-600 block mt-2 hover:underline">
                                View all
                            </Link>
                        }
                        
                    </ul>
                    : <p className="text-gray-500 p-3">No notifications</p>
            }   
            </div>
        </>
       
    );  
}