import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function ViewRaw() {
    const {urlCode} = useParams();
    const [code, setCode] = useState("Loading...");
    
    useEffect(() => {
        // Local cookie
        const cookie = Cookies.get("token");

        if (import.meta.env.VITE_BACKEND_TYPE == "rest") {
            let header = {
                "Content-Type": "application/json",
            }

            if (cookie) {
                header["Authorization"] = `Bearer ${cookie}`;
            }

            const response = fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/api/txt/${urlCode}`
            , {
                method: "GET",
                headers: header,
            });

            response.then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        console.log(data)
                        setCode(data["fileData"]);
                    }).catch((error) => {
                        setCode("Error fetching data, " + error);
                    });
                } else {
                    setCode("Error fetching data, " + response.statusText);
                }
            });
        }
    }, [urlCode]);

    return (
        <div>
            <pre style={{color: "greenyellow"}} >{code}</pre>
        </div>
    );
}