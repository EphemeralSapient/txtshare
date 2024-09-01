import { abyss } from "@uiw/codemirror-theme-abyss";
import CodeMirror from '@uiw/react-codemirror';
import { formatDistanceToNow } from 'date-fns';
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaCode, FaLock, FaSpinner, FaTag, FaUserCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useParams } from "react-router-dom";

import "./ViewPage.css";

// Lazy load language modules
const languageModules = {
  javascript: () => import('@codemirror/lang-javascript').then(mod => mod.javascript()),
  python: () => import('@codemirror/lang-python').then(mod => mod.python()),
  html: () => import('@codemirror/lang-html').then(mod => mod.htmlLanguage),
  css: () => import('@codemirror/lang-css').then(mod => mod.cssLanguage),
  java: () => import('@codemirror/lang-java').then(mod => mod.java()),
  php: () => import('@codemirror/lang-php').then(mod => mod.php()),
  cpp: () => import('@codemirror/lang-cpp').then(mod => mod.cpp()),
  sql: () => import('@codemirror/lang-sql').then(mod => mod.sql()),
  xml: () => import('@codemirror/lang-xml').then(mod => mod.xml()),
  rust: () => import('@codemirror/lang-rust').then(mod => mod.rust()),
  go: () => import('@codemirror/lang-go').then(mod => mod.go()),
  markdown: () => import('@codemirror/lang-markdown').then(mod => mod.markdown()),
  json: () => import('@codemirror/lang-json').then(mod => mod.json()),
  yaml: () => import('@codemirror/lang-yaml').then(mod => mod.yaml()),
};

export default function ViewRaw() {
    const { urlCode } = useParams();
    const [didStart, setDidStart] = useState(false);
    const [code, setCode] = useState("Loading...");
    const [accountName, setAccountName] = useState("Loading...");
    const [fileDetails, setFileDetails] = useState({});
    const [languageExtension, setLanguageExtension] = useState(null);
    const [isPasswordProtected, setIsPasswordProtected] = useState(false);
    const [password, setPassword] = useState("");
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [passwordFeedback, setPasswordFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Password loading
    const [is404, set404] = useState(false);

    const fetchData = async (pass = null) => {
        setIsLoading(true);
        setDidStart(true);
        try {
            const cookie = Cookies.get("token");

            const header = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                header["Authorization"] = `Bearer ${cookie}`;
            }

            let url = `${import.meta.env.VITE_BACKEND_URL}/v1/api/txt/${urlCode}`;
            if (pass) {
                header["Password"] = pass;
            }

            const response = await fetch(url, {
                method: "GET", 
                headers: header,
            });

            if (response.status === 401) {
                setIsPasswordProtected(true);
                setPasswordFeedback("incorrect");
                setTimeout(() => setPasswordFeedback(null), 2000);
            }
            
            if (response.status === 404 || response.status === 410) {
                setCode("File not found");
                set404(true);
                return;
            }

            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);

            const lang = data["fileDetail"]["type"];
            if (lang in languageModules) {
                const mod = await languageModules[lang]();
                setLanguageExtension(mod);
            }

            setCode(data["fileData"]);
            setFileDetails(data["fileDetail"]);
    
                if (data["fileDetail"]["linked_account_id"] != null) {
                    const accountResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/v1/api/account/${data["fileDetail"]["linked_account_id"]}`, {
                        method: "GET",
                        headers: header,
                    });
    
                    if (!accountResponse.ok) {
                        throw new Error(`Error fetching account data: ${accountResponse.statusText}`);
                    }
    
                    const accountData = await accountResponse.json();
                    setAccountName(accountData["username"]);
                } else {
                    setAccountName("No account linked");
                }
                setIsPasswordProtected(false);
                setIsUnlocking(true);
                setPasswordFeedback("correct");
                setTimeout(() => {
                    setIsUnlocking(false);
                    setPasswordFeedback(null);
                }, 1000);
    
                } catch (error) {
                setCode(`Error fetching data: ${error.message}`);
            }

            setIsLoading(false);

        };
    
        useEffect(() => {
            if (didStart === false) {   
                fetchData();
            }
        }, []);
    
        const handlePasswordSubmit = (e) => {
            e.preventDefault();
            fetchData(password);
        };

    const createdDate = new Date(fileDetails.created);
    const expireDate = new Date(fileDetails.expire);


    return (<>
    {is404 && (
    <div className="file-not-found">
        <FaExclamationTriangle size={48} /> 
        <h1 className="error-title">File not found</h1>
        <p className="error-description">The requested file could not be located. Please check the URL or try navigating back.</p>
    </div>
    )}

   {isPasswordProtected && (
                <div className="password-overlay">
                    <div className={`password-form ${passwordFeedback ? passwordFeedback : ''}`}>
                        {isLoading ? (
                            <FaSpinner className="spinner-icon" />
                        ) : (
                            <>
                                <FaLock className="lock-icon" />
                                <h2>Password Protected File</h2>
                                <form onSubmit={handlePasswordSubmit}>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                    />
                                    <button type="submit">Unlock</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        <div className={`view-raw-container ${(isPasswordProtected || is404) ? 'blurred' : ''} ${isUnlocking ? 'unlocking' : ''}`}>
            

    <div className="file-info-container">
        <div className="file-name">
            <h3>{fileDetails["file_name"] || "Untitled"}</h3>
        </div>
        <div className="file-info-item account">
            <FaUserCircle className="account-icon" />
            <span>{accountName === "No account linked" ? "Guest" : accountName}</span>
        </div>

        <div className="file-info-item date-info">
            {}
            <span title={new Date(fileDetails.created).toLocaleString()}>
                <FaCalendarAlt className="date-icon" />
                <strong>Created:</strong> {isNaN(createdDate.getTime()) ? "Invalid date" : formatDistanceToNow(createdDate, { addSuffix: true })}
            </span>
        </div>
        <div className="file-info-item date-info">
            <span title={new Date(fileDetails.expire).toLocaleString()}>
                <FaClock className="date-icon" />
                <strong>Expires:</strong> {isNaN(expireDate.getTime()) ? "Invalid date" : formatDistanceToNow(expireDate, { addSuffix: true })}
            </span>
        </div>

        <div className="file-info-item syntax-highlight">
            <FaCode  className="syntax-icon" />
            <strong> Syntax: </strong> {fileDetails.type}
        </div>
    </div>


        <div className="file-info-item categories">
            {fileDetails["category"] && fileDetails["category"].split(',').map((cat, index) => (
                cat.trim() === "None" ? null :
                <span key={index} className="category-tag"> <FaTag className="tag-icon" /> {cat.trim()}</span>
            ))}
        </div>


        <div className="file-code">
            <CodeMirror
              value={code}
              theme={abyss}
              readOnly={true}
              extensions={[languageExtension].filter(Boolean)}
            />
        </div>
    </div>

    {/* 250 pixel empty height space */}
    <div style={{ height: "250px" }}></div>
  </>);
}