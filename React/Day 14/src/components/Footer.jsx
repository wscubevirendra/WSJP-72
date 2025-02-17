import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-blue-600 text-white text-center p-4 mt-8">
                <p>&copy; {new Date().getFullYear()} Quiz App. All Rights Reserved.</p>
            </footer>
        </>
    );
}