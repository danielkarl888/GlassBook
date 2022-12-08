import { Link } from "react-router-dom";

function LinkToLogin() {
    return(
        <Link to='/'>
        <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
            <i className="bi bi-chat-left-dots-fill"></i> Login</button>
        </Link>
    );
}
export default LinkToLogin;