import { Link } from 'react-router';
import mockMessages from '../data/mockMessages';

export const ChatContainer = () => {
    const EightFirstMessages = mockMessages.slice(0, 8).map(message =>{
        return (
            <div key={message.id} className="w-full text-lg">
                <Link className={`${message.viewed ? "" : "text-amber-500" } 
                block bg-gray-200 p-2 my-2 rounded-lg  truncate bg-gray-200 truncate dark:bg-gray-900`} 
                to={`/chat/${message.id}`}>
                    <strong>{message.sender}:</strong> {message.text}
                </Link>  
            </div>
        );
    })
    return (
        <div aria-labelledby="messages-heading">
            <h2 className="mb-3 text-blue-300 text-xl font-semibold">Recent message</h2>
            {EightFirstMessages}
            {mockMessages.length > 8 && 
            <Link to='/chat' className="text-lg text-blue-400 hover:underline hover:text-blue-300">All chats</Link>}
            
        </div>
    );
}