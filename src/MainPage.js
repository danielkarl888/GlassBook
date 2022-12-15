import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"

function MainPage() {
    return (
        <div>
            {activeUser.comments.map(comment => (
                <div>
                    <p>{comment.comment_txt} and the rate is {comment.rate}</p>
                </div>
            ))}
        </div>
    )



}
export default MainPage;
