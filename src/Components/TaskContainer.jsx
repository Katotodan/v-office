import { Link } from 'react-router';
import tasks from '../data/tasks.json'

export const TaskContainer = () => {
    const fiveFirstTasks = tasks.slice(0, 5).map(task =>{
        return (
            <div key={task.id} aria-labelledby="tasks-heading">
                <Link className="flex bg-gray-200 p-2 my-2 rounded-lg text-lg flex-col gap-2 dark:bg-gray-900" to={`/task/${task.id}`}>
                    <div className='flex-3'>
                        <div className='w-full'>
                            <div className='truncate'><strong>{task.title}</strong></div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-full'>
                            <div className='truncate'>status: <strong>{task.status}</strong></div>
                        </div>
                    </div>
                </Link>  
            </div>
        );
    })
    return (
        <div className="chat-container">
            <h2 className="mb-3 text-blue-300 text-xl font-semibold">Recent Task</h2>
            {fiveFirstTasks}
            {tasks.length > 5 && 
                <Link to='/task' className="text-lg text-blue-400 hover:underline hover:text-blue-300">All Tasks</Link>
            }
        </div>
    );
}