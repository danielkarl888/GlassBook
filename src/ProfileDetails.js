import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import moment from "moment";

function ProfileDetails() {
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
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-6">
                    <div>
                        <h2> Last 50 Comments:</h2>
                        <table className="table table-bordered">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Reviewer</th>
                                <th>Rate</th>
                                <th>Comment Text</th>
                                <th>Date</th>
                            </tr>

                            {comments ? (

                                comments.map(comment => <tr>
                                    <td>{comment.seq}</td>
                                    <td>{comment.book_name}</td>
                                    <td>{comment.user_name}</td>
                                    <td>{comment.rate}</td>
                                    <td>{comment.comment_txt}</td>
                                    <td>{moment(comment.date).utc().format('DD/MM/YYYY')}</td>

                                </tr>)
                            ) : (
                                <div>Loading...</div>
                            )}
                        </table>
                    </div>
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
            </div>

        </div>
    )



}
export default ProfileDetails;
