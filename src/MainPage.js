import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import activeBook from "./activeBook";
import moment from "moment";
import NavBar from "./NavBar";
import SearchBar from "./Search_bar";
function MainPage() {
    const [comments, setComments] = useState(null);
    const [topBooks, setTopBooks] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5182/api/Comments');
            const json = await response.json();
            setComments(json);
        }
        fetchData();
    }, []);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5182/api/Comments/top10');
            const json = await response.json();
            setTopBooks(json);
        }
        fetchData();
    }, []);

    return (
        <div class="container">
            <NavBar />

            <div class="row">
                <div class="col-sm">
                    <SearchBar/>
                </div>
                <div class="col-5">
                    <div>
                        <h2 className="display-4"> Last 20 Comments</h2>
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
                                    <td><Link to='/book_details' onClick={() => {
                                        activeBook.book_id = comment.book_id;
                                        activeBook.book_name = comment.book_name;
                                        console.log(activeBook);
                                    }}>{comment.book_name}</Link></td>
                                    <td>{comment.user_name}</td>
                                    <td>{comment.rate}</td>
                                    <td>{comment.comment_txt}</td>
                                    <td>{moment(comment.date).utc().format('DD/MM/YYYY')}</td>
                                </tr>)
                            ) : (
                                <div class="spinner-border text-primary" role="status">
                                    <span class="sr-only"></span>
                                </div>)}
                        </table>
                    </div>                </div>
                <div class="col-sm">
                    <div>
                        <h2 className="display-4"> Top 10 Rating Books</h2>
                        <table className="table table-bordered">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Avg rating</th>
                                <th>Image</th>
                                <th>Publisher</th>
                            </tr>

                            {topBooks ? (

                                topBooks.map(book => <tr>
                                    <td>{book.seq}</td>
                                    <td><Link to='/book_details' onClick={() => {
                                        activeBook.book_id = book.book_id;
                                        activeBook.book_name = book.book_name;
                                        console.log(activeBook);
                                    }}>{book.book_name}</Link></td>
                                    <td>{book.author_name}</td>
                                    <td><strong>{book.avg_rate}</strong></td>
                                    <td><img src={book.img}></img></td>
                                    <td>{book.publisher}</td>

                                </tr>)
                            ) : (
                                <div class="spinner-border text-primary" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            )}
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )



}
export default MainPage;
