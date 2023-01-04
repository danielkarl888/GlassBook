import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import activeBook from "./activeBook";
import moment from "moment";
import NavBar from "./NavBar";
import SearchBar from "./Search_bar";

function ProfileDetails() {
    const [userDetails, setUserDetails] = useState(null);
    const [myComments, setMyComments] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5182/api/Users/${activeUser.user_name}`);
            //const response = await fetch(`http://localhost:5182/api/Users/DayazAdytum`);
            const json = await response.json();
            // talk with evyatar about this query
            setUserDetails(json);
        }
        fetchData();
    }, []);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5182/api/Comments/mycomments/${activeUser.user_name}`);

            if (response.ok) {
                // the response was successful, you can parse the JSON data
                const json = await response.json();
                console.log(json)
                setMyComments(json);
            } else {
                console.log("here!!")
            }

        }
        fetchData();
    }, []);
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
                    <SearchBar />
                </div>
                <div className="col-6">
                    <div>
                        {userDetails ? (<div><h2 className="display-4"> {userDetails[0].user_name}</h2>
                            <span><h5 className="display-6">Age : {userDetails[0].age}</h5> </span>
                            <span><h5 className="display-6" >Country : {userDetails[0].country}</h5> </span>
                            <span><h5 className="display-6">Total number of comments : {userDetails[0].numComments}</h5> </span>
                        </div>)
                            : (<h2> Loading...:</h2>)}
                        <h2 className="display-4"> My Last 50 Comments</h2>

                        <table className="table table-bordered">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Rate</th>
                                <th>Comment Text</th>
                                <th>Date</th>
                            </tr>

                            {myComments ? (

                                myComments.map(c => <tr>
                                    <td>{c.seq}</td>
                                    <td><Link to='/book_details' onClick={() => {
                                        activeBook.book_id = c.book_id;
                                        activeBook.book_name = c.book_name
                                        console.log(activeBook);
                                    }}>{c.book_name}</Link></td>
                                    <td>{c.author_name}</td>
                                    <td>{c.rate}</td>
                                    <td>{c.comment}</td>
                                    <td>{reformatDate(c.date)}</td>

                                </tr>)
                            ) : (
                                <div>No Commnets...</div>
                            )}
                        </table>
                    </div>
                </div>
                <div className="col-sm">

                </div>
            </div>

        </div>
    )



}
export default ProfileDetails;
