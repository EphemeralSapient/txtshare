import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            // Store the token in a cookie
            Cookies.set('user', token);  // Example: expire in 1 day

            // Redirect to the home page
            navigate('/');
        } else {
            // Handle the case where no token is found
            console.error('No token found in URL');
            navigate('/');  // Redirect to home or error page if preferred
        }
    }, [location, navigate]);

    return (
        <div className="auth-callback">
            <div>Processing authentication...</div>
        </div>
    );
};

export default AuthCallback;
