import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context";

export default function Header() {
    const { user, logoutHandler } = useContext(MainContext);

    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Quiz App</h1>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>

                    {
                        user == null ?
                            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
                            :
                            <>
                                <div onClick={logoutHandler} className="text-white hover:text-gray-200">Logout</div>
                                <Link to="/add-quiz" className="text-white hover:text-gray-200">Add Quiz</Link>
                                <Link to="/view-quiz" className="text-white hover:text-gray-200">View Quiz</Link>
                            </>

                    }


                </div>
            </div>
        </nav>
    );
}
