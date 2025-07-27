import { Link } from "react-router";
export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Page Not Found</p>
        <button className='block  px-4 py-2 rounded-md
        bg-blue-100 hover:bg-blue-200 dark:text-white dark:bg-blue-500 dark:hover:bg-blue-600' 
        aria-label="Log out" >
            <Link to='/' className="block">Go back home</Link>
        </button>
      </div>
    </div>
  );
}