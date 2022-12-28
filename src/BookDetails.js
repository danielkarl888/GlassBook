import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import activeBook from "./activeBook";
import moment from "moment";

function BookDetails({ id }) {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5182/api/Books/${activeBook.book_id}`);
            const json = await response.json();
            setComments(json);
        }
        fetchData();
    }, []);
    console.log(activeBook)
    return (
        <div className="container">
            <div className="row">
                <div class="col-sm">
                    One of three columns
                </div>
                <div className="col-6">
                    <div>
                        {comments ? (<div><h2> {comments[0].book_name}</h2>
                            <img className="rounded img-fluidrounded mx-auto d-block" src={comments[0].img} alt="hii" width="20%"  ></img>
                            <span><h5>number of reviews : {comments.length}</h5> </span>
                        </div>)


                            : (<h2> Loading...:</h2>)}
                        <table className="table table-bordered">
                            <tr>
                                <th>#</th>
                                <th>Reviewer</th>
                                <th>Rate</th>
                                <th>Comment Text</th>
                                <th>Date</th>
                            </tr>

                            {comments ? (

                                comments.map(comment => <tr>
                                    <td>{comment.seq}</td>
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
                <div className="col-sm">
                    One of three columns
                </div>
            </div>

        </div>
    )



}
export default BookDetails;
