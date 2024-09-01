/* eslint-disable react/prop-types */
import { useState, useEffect, Suspense } from 'react';
import Cookies from 'js-cookie';
import CodeMirror from '@uiw/react-codemirror';
import { abyss } from '@uiw/codemirror-theme-abyss';
import { autocompletion } from '@codemirror/autocomplete';
import "./CreatePage.css";
import { 
    FaTag, 
    FaCode, 
    FaClock, 
    FaLock, 
    FaList,
    FaPaste,
    // Fa icon for error
    FaExclamationTriangle,
    // Fa icon for success
    FaCheckCircle,
    FaTimes
} from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

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

function LoadingOverlay({ state, message, onClose }) {
    return (
        <div className="loading-overlay">
            {state === "loading" && (
                <div className="loading-spinner"></div>
            )}
            {state === "success" && (<>
                <button className="close-btn" onClick={onClose}><FaTimes /></button>
                <div className="loading-success">
                    <div className="success-icon"><FaCheckCircle /></div>
                    <div className="success-text">Success</div>
                    <br/>
                    <div className="success-message">
                        <a href={message} className="success-url" target="_blank" rel="noopener noreferrer">
                            {message}
                        </a>
                    </div>
                </div>
                </>
            )}
            {state === "error" && (
                <div className="loading-error">
                    <div className="error-icon"><FaExclamationTriangle /></div>
                    <div className="error-text"> Woops, something went wrong!</div>
                    <div className="error-message">{message}</div>
                </div>
            )}
        </div>
    );
}

async function Save({ details }) {
    const { code, loadingState, setLoadingState, categories, cookie, language,  expiration, password, title, tags } = details;
    if (loadingState != "idle") {
        return;
    }

    // Combine tags and categories as single unit
    const tagsArray = tags ? tags.split(",") : [];
    const categoriesArray = categories;
    const combinedTags = [...tagsArray, ...categoriesArray];

    setLoadingState("loading");

    if (import.meta.env.VITE_BACKEND_TYPE === 'rest') {
        const url = import.meta.env.VITE_BACKEND_URL + '/v1/api/txt'
        let header = {
            'Content-Type': 'application/json',
        };
        
        if (cookie) {
            header['Authorization'] = `Bearer ${cookie}`;
        }
        
        var expire, burn;

        if(expiration === "burn") {
            burn = true;
            expire = "once";
        } else {
            burn = false;
            expire = expiration;
        }
        // Server accepts these
        // fileName = checkLen("fileName")
        // fileData = checkLen("fileData",260000)
        // pass = checkLen("password")
        // category = checkLen("category") || "None"
        // fileType = checkLen("fileType") || "None"
        // expire = checkLen("expire") || "hour"

        const resp = fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                fileName: title || "Untitled",
                fileData: code,
                password: password,
                category: combinedTags.join(","),
                fileType: language,
                expire: expire,
                burn: burn                
            }),
        })
    
        await new Promise(r => setTimeout(r, 1000 + (Math.random() * 1000)));
        resp.then( async (response) =>{
            if (response.ok) {
                const respBody = await response.json();
                // redirect url to this site with /respBody.url
                setLoadingState("success", import.meta.env.BASE_URL + respBody["urlCode"]);
                
            } else {
                setLoadingState("error","Server error : " + response.statusText);
                setTimeout(() => {
                    setLoadingState("idle");
                }, 5000);
            }
        }).catch(() => {
            setLoadingState("error","Network error");
            setTimeout(() => {
                setLoadingState("idle");
            }, 5000);
        });
    }
}

function PasteSettings( { onLanguageChange, onExpirationChange, onPasswordChange, onTitleChange, onTagsChange } ) {
    return (
        <div className="paste-settings-container">
            <div className="paste-setting">
                <label><FaTag /> Tags:</label>
                <input type="text" placeholder="Add tags separated by commas" onChange={(e) => onTagsChange(e.target.value)} />
            </div>
            <div className="paste-setting">
                <label><FaCode /> Syntax Highlighting:</label>
                <select onChange={(e) => onLanguageChange(e.target.value)} defaultValue="javascript">
                    <option value="plaintext">Plain Text</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="cpp">C++</option>
                    <option value="sql">SQL</option>
                    <option value="xml">XML</option>
                    <option value="rust">Rust</option>
                    <option value="go">Go</option>
                    <option value="markdown">Markdown</option>
                    <option value="json">JSON</option>
                    <option value="yaml">YAML</option>
                </select>
            </div>
            <div className="paste-setting">
                <label><FaClock /> Paste Expiration:</label>
                <select onChange= {(e) => onExpirationChange(e.target.value)} defaultValue="burn">
                    <option value="burn">Burn After Read</option>
                    <option value="hour">1 Hour</option>
                    <option value="day">1 Day</option>
                    <option value="week">1 Week</option>
                    <option value="month">1 Month</option>
                    <option value="year">1 Year</option>
                </select>
            </div>
            <div className="paste-setting">
                <label><FaLock /> Password:</label>
                <input type="text" placeholder="Optional" onChange={(e) => onPasswordChange(e.target.value)} />
            </div>
            <div className="paste-setting">
                <label><FaPaste /> Paste Name / Title:</label>
                <input type="text" placeholder="Paste title" required onChange={(e) => onTitleChange(e.target.value)} />
            </div>
        </div>
    );
}

export default function EditorPage() {
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [cookie, setCookie] = useState(Cookies.get('user'));
    const [language, setLanguage] = useState('javascript');
    const [expiration, setExpiration] = useState('burn');
    const [password, setPassword] = useState(null);
    const [title, setTitle] = useState(null);
    const [tags, setTags] = useState(null);
    const [code, setCode] = useState(`// Paste your code in here, or type code here! [JS is selected]

const hello = "Hello, javascript!"

console.log(hello);
`);
    const [languageExtension, setLanguageExtension] = useState(null);

    useEffect(() => {
        if (cookie) {
            console.log('cookie', cookie);
        } else {
            console.log('no cookie');
        }
    }, [cookie]);

    useEffect(() => {
        const loadLanguage = async () => {
            if (languageModules[language]) {
                const extension = await languageModules[language]();
                setLanguageExtension(extension);
            } else {
                setLanguageExtension(null);
            }
        };
        loadLanguage();
    }, [language]);

    const categories = [
        "General", "Personal", "Work", "Education", "Finance", "Travel", "Food",
        "Health", "Sports", "Entertainment", "Music", "Movies", "Books", "News",
        "Events", "Programming", "Web Development", "Data Science", "Machine Learning",
        "Artificial Intelligence", "Cybersecurity", "Cloud Computing", "Blockchain",
        "DevOps", "Networking", "Database", "Mobile Development", "Game Development",
        "Ethical Hacking", "Science", "History", "Art", "Philosophy", "Politics"
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        setSelectedCategories(prevSelected => 
            prevSelected.includes(category) 
                ? prevSelected.filter(c => c !== category)
                : [...prevSelected, category]
        );
    };

    const [loadingState, setLoadingState] = useState("idle");
    const [loadingInfo, setLoadingInfo] = useState("");

    return (
        <div className="editor-page">
            {loadingState!="idle" && <LoadingOverlay state={loadingState} message={loadingInfo} onClose={() => setLoadingState("idle")} />}
            <Suspense fallback={<div>Loading editor...</div>}>
                <CodeMirror
                    value={code}
                    theme={abyss}
                    extensions={[languageExtension, autocompletion()].filter(Boolean)}
                    onChange={(value) => setCode(value)}
                    autoSave='true'
                />
            </Suspense>

            <div className="editor-controls" >
                <button className="btn save-btn" onClick={
                    () => {
                        Save({details: {
                            code: code,
                            loadingState: loadingState,
                            setLoadingState: (state, message) => {
                                setLoadingInfo(message);
                                setLoadingState(state);
                            },
                            categories: selectedCategories,
                            cookie: cookie,
                            language: language,
                            expiration: expiration,
                            password: password,
                            title: title,
                            tags: tags
                        }});
                    }
                }>Save</button>
                {cookie ? (
                    <button className="btn ai-btn" onClick={ () => {
                        // Redirect to /shares usin react-router-dom
                        navigate("/shares");
                    }}>Check your text shares</button>
                ) : (
                    <button className="btn login-with-google-btn"
                        onClick={async () => {
                            if (import.meta.env.VITE_BACKEND_TYPE === 'rest') {
                                const resp = await fetch(import.meta.env.VITE_BACKEND_URL + '/v1/api/auth/google')
                                const json = await resp.json();
                                window.open(json["url"], '_blank', 'noopener,noreferrer');
                            }
                        }}
                    >Google Login</button>
                )}
            </div>

            <PasteSettings onLanguageChange={setLanguage} onExpirationChange={setExpiration} onPasswordChange={setPassword} onTitleChange={setTitle} onTagsChange={setTags} />
            <div className="category-container">
                <label><FaList /> Category:</label>
                <div className="category-chips">
                        {categories.map((category, index) => (
                    <div
                        key={category}
                        className={`category-chip ${selectedCategories.includes(category) ? 'selected' : ''}`}
                        onClick={() => toggleCategory(category)}
                        style={{ 
                            animationDelay: `${0.52 + (index * 0.01)}s`
                        }}
                    >
                        {category}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
