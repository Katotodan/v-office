export const SearchBar = () =>{

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form  
        className="flex md:px-5 lg:px-8 xl:px-16" 
        onSubmit={handleSubmit}  
        role="search" 
        aria-label="Search for tasks, people, or resources, etc"
        >
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input type="search" id="searchInput" placeholder="Search for tasks, people, or resources..." aria-describedby="search-help"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md outline-none md:flex-7"/>
            <button onclick="search()" type="submit"
            className="px-4 py-2 bg-blue-300 text-white rounded-r-md cursor-pointer transition-colors duration-200 md:flex-2 text-xl">
                Search
            </button>
            <p id="search-help" className="sr-only">
                Enter a keyword and press search to find results across the intranet.
            </p>
        </form>
    );
}