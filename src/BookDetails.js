import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import activeBook from "./activeBook";
import moment from "moment";
import NavBar from "./NavBar";
import SearchBar from "./Search_bar";
import ReviewForm from "./ReviewForm";
function BookDetails({ id }) {
    const [comments, setComments] = useState(null);
    const [avg, setAVG] = useState(null);
    const [change, setChange] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5182/api/Books/avg/${activeBook.book_id}`);
            const json = await response.json();
            setAVG(json);
        }
        fetchData();
    }, [change]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5182/api/Books/${activeBook.book_id}`);
            const json = await response.json();
            setComments(json);
        }
        fetchData();
    }, [change]);
    console.log(activeBook)
    function reformatDate(dateStr) {
        const date = new Date(dateStr);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
    return (
        <div className="container">
            <NavBar />
            
            <div className="row">
                <div class="col-sm">
                    <SearchBar/>
                </div>
                <div className="col-6">
                    <div>
                        {comments ? (<div><h2> {comments[0].book_name}</h2>
                            <img className="rounded img-fluidrounded mx-auto d-block" src={comments[0].img} alt="hii" width="20%"  ></img>
                            <span><h5>Author : {comments[0].author_name}</h5> </span>
                            <span><h5>Publisher : {comments[0].publisher}</h5> </span>
                            <span><h5>Number of reviews : {comments.length}</h5> </span>


                        </div>)
                            : (<h2> Loading...:</h2>)}
                        {avg ? (<span><h5>Average Rating : {avg[0].avg_rate}</h5> </span>) : (<h2> Loading...:</h2>)}

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
                                    <td>{reformatDate(comment.date)}</td>

                                </tr>)
                            ) : (
                                <div>Loading...</div>
                            )}
                        </table>
                    </div>
                </div>
                <div className="col-sm">
                <ReviewForm setChange = {setChange} change={change} />       
                </div>
            </div>

        </div>
    )



}
export default BookDetails;
