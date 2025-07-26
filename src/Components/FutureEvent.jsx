import { Link } from 'react-router';
import events from '../data/upComingEvents.json';
import { FaMapLocation } from "react-icons/fa6";

export const FutureEvent = () => {
    const fourFirstEvents = events.slice(0, 4).map(event =>{
        return (
            <div key={event.id} aria-labelledby="events-heading">
                <Link className="flex bg-gray-200 p-2 my-2 rounded-lg text-lg flex-col gap-2 dark:bg-gray-900" to={`/event/${event.id}`}>
                    <div className='flex-3'>
                        <div className='w-full'>
                            <h2 className='truncate font-extrabold'>{event.title}</h2>
                            <p className='truncate'>{event.description}</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='truncate'><FaMapLocation className='inline'/> {event.location}</div>
                            <div className='truncate'>
                                {new Date(event.date).toLocaleString('en-US', 
                                    {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </Link>  
            </div>
        );
    })
    return (
        <div>
            <h2 className="mb-3 text-blue-300 text-xl font-semibold">Up coming Events</h2>
            {fourFirstEvents}
            {events.length > 4 && 
                <Link to='/task' className="text-lg text-blue-400 hover:underline hover:text-blue-300">All events</Link>
            }
        </div>
    );
}