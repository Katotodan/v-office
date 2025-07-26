import { Link } from "react-router";

export const ResourceContainer = () => {
  return (
    <div aria-labelledby="resources-heading">
        <h2 className="mb-3 text-blue-300 text-xl font-semibold">Quick Resources</h2>
        <div class="resource-list">
            <Link to="/guide" 
            className="block text-blue-400 no-underline py-2 text-lg transition-colors duration-200 hover:text-blue-400 
            hover:underline">
                Collaboration Guidelines
            </Link>
            <Link to="/crm"
            className="block text-blue-400 no-underline py-2 text-lg transition-colors duration-200 hover:text-blue-400 
            hover:underline">
                Project Management Tool
            </Link>
            <Link to="/hr" 
            className="block text-blue-400 no-underline py-2 text-lg transition-colors duration-200 hover:text-blue-400 
            hover:underline">
                HR Benefits Portal
            </Link>
            <Link to="/training-hub"
            className="block text-blue-400 no-underline py-2 text-lg transition-colors duration-200 hover:text-blue-400 
            hover:underline">
                Training Hub
            </Link>
            <Link to="/slack"
            className="block text-blue-400 no-underline py-2 text-lg transition-colors duration-200 hover:text-blue-400 
            hover:underline">
                Slack
            </Link>
        </div>
    </div>
  );
}