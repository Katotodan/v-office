import { Link } from 'react-router';
import notifications from '../data/notifications.json'

export const NotificationContainer = () => {
    const fourFirstNotifications = notifications.slice(0, 4).map(notification =>{
        return (
            <div key={notification.id}>
                <Link className="flex bg-gray-200 p-2 my-2 rounded-lg text-lg flex-col gap-2 dark:bg-gray-900" to={`/notification/${notification.id}`}>
                    <div className='flex-3'>
                        <div className='w-full'>
                            <h2 className='truncate font-extrabold'>{notification.title}</h2>
                            <p className='truncate'>{notification.message}</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-full'>
                            <div className='truncate'>Type: <strong>{notification.type}</strong></div>
                        </div>
                    </div>
                </Link>  
            </div>
        );
    })
    return (
        <div aria-labelledby="announcements-heading">
            <h2 className="mb-3 text-blue-300 text-xl font-semibold">Announcements</h2>
            {fourFirstNotifications}
            {notifications.length > 4 && 
                <Link to='/task' className="text-lg text-blue-400 hover:underline hover:text-blue-300">All Announcements</Link>
            }
        </div>
    );
}