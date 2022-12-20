import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"

function MainPage() {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5182/api/Comments');
            const json = await response.json();
            setComments(json);
        }
        fetchData();
    }, []);


    return (
        <div>
            <table>
                <tr>
                    <th>book_id</th>
                    <th>user_name</th>
                    <th>rate</th>
                    <th>comment_txt</th>
                </tr>

                {comments ? (

                    comments.map(comment => <tr>
                        <td>{comment.book_id}</td>
                        <td>{comment.user_name}</td>
                        <td>{comment.rate}</td>
                        <td>{comment.comment_txt}</td>
                    </tr>)
                ) : (
                    <div>Loading...</div>
                )}
            </table>
        </div>
    )



}
export default MainPage;
