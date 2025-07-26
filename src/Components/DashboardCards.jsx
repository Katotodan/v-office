import { ChatContainer } from "./ChatContainer";
import { TaskContainer } from "./TaskContainer";
import { NotificationContainer } from "./NotificationContainer";
import { ResourceContainer } from "./ResourceContainer";
import { FutureEvent } from "./FutureEvent";

export const DashboardCards = () => {
    return (
        <div className="bg-white rounded-xl pt-6 md:py-6 px-0 md:px-6 md:m-6 md:p-2 my-8 shadow-md text-xl
        dark:bg-neutral-900">
            <h1 className="mb-4 text-2xl md:text-3xl font-semibold md:font-bold px-4 md:px-0" >Your Dashboard</h1>
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))]">
                <article className="dark:bg-neutral-700 bg-gray-100 rounded-lg p-5 transition-transform duration-300 
                md:hover:-translate-y-1 hover:shadow-lg">
                    <ChatContainer />
                </article>
                <article className="dark:bg-neutral-700 bg-gray-100 rounded-lg p-5 transition-transform duration-300 
                md:hover:-translate-y-1 hover:shadow-lg">
                    <TaskContainer />
                </article>
                <article className="dark:bg-neutral-700 bg-gray-100 rounded-lg p-5 transition-transform duration-300 
                md:hover:-translate-y-1 hover:shadow-lg">
                    <NotificationContainer />
                </article>
                <article className="dark:bg-neutral-700 bg-gray-100 rounded-lg p-5 transition-transform duration-300 
                md:hover:-translate-y-1 hover:shadow-lg">
                    <FutureEvent />
                </article>
                <article className="dark:bg-neutral-700 bg-gray-100 rounded-lg p-5 transition-transform duration-300 md:hover:-translate-y-1 hover:shadow-lg">
                    <ResourceContainer />
                </article>
                
            </div>
            
            
        </div>
    );
}   