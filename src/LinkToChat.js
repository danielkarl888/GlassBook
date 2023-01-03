import { Link } from "react-router-dom";

function LinkToChat() {
    return (
        <>
            <div className="row">
                <div className="col-3">
                </div>
                <Link className="col-6 text-center" to='/main'>
                    <button type="submit" className="btn btn-primary btn-karl fs-4 m-3" id="login-btn">
                        <i className="bi bi-chat-left-dots-fill"></i> Click Here to enter</button>
                </Link>
                <div className="col-3"></div>
            </div>
        </>
    );
}
export default LinkToChat;