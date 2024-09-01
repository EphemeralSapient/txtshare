// Requires token to access the API and displays user's created txt[s]
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";

export default function Shares() {
    const cookie = Cookies.get("user");
    const [txts, setTxts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate(); // Initialize the navigate hook

    if(cookie == null) {
        // Redirect to "/" path using react-router-dom
        navigate("/");
    }

    useEffect(() => {
        if(cookie) {
            console.log(cookie);
        }
    },[]);

    if(isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            {}
        </>
    )
}