
import { Link } from "react-router-dom";
import "./ErrorPage.css"



function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">We apologize for the inconvenience. Please try again later.</p>
       <Link to="/">
         <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " >
           Go back
         </button>
       </Link>
      
      </div>
    </div>
  );
}

export default ErrorPage;
