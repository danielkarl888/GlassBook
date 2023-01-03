import { useState, useEffect, useLocation } from 'react';
import SearchBar from "./Search_bar";
import search_data from "./ManagingUsersList/seachData";
import NavBar from "./NavBar";
import activeBook from './activeBook';
import { Link } from "react-router-dom";

function SearchPage() {

    const [books, setBooks] = useState(null);
    const searchParams = new URLSearchParams(window.location.search);
    const searchCategory = searchParams.get('searchCategory');
    const searchCountry = searchParams.get('searchCountry');
    const searchText = searchParams.get('searchText');

    useEffect(() => {

        console.log('in useeffectt')

        const searchParams = new URLSearchParams(window.location.search);
        const searchCategory = searchParams.get('searchCategory');
        const searchCountry = searchParams.get('searchCountry');
        const searchText = searchParams.get('searchText');

        async function fetchData() {

            if (searchText !== 'null') {
                const response = await fetch(`http://localhost:5182/api/Books/SearchText/${searchText}`);
                const data = await response.json();
                setBooks(data);
            }
            else if (searchCategory !== 'null') {
                const response = await fetch(`http://localhost:5182/api/Books/SearchCategory/${searchCategory}`);
                const data = await response.json();
                setBooks(data);
            }
            else {
                const response = await fetch(`http://localhost:5182/api/Books/SearchCountry/${searchCountry}`);
                const data = await response.json();
                setBooks(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div class="container">
            <NavBar />
            <div class="row">
                <div class="col-3">
                    <div>
                        <h2> Search:</h2>
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div class="col-8">
                    <div>
                        <h2> {searchText != 'null' ? (<>Your Text results for "{searchText}":</>) : (<></>)}</h2>
                        <h2> {searchCategory != 'null' ? (<>Top 10 Books of Category {searchCategory}</>) : (<></>)}</h2>
                        <h2> {searchCountry != 'null' ? (<>Top 10 Books of the Country {searchCountry}</>) : (<></>)}</h2>

                        <table className="table table-bordered">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Avg rating</th>
                                <th>Image</th>
                                <th>Publisher</th>
                            </tr>

                            {books ? (
                                books.length > 0 ? (
                                    books.map(book => <tr>
                                        <td>{book.book_name}</td>
                                        <td>{book.author_name}</td>
                                        <td>{book.avg_rate}</td>
                                        <td><img src={book.img}></img></td>
                                        <td>{book.publisher}</td>
                                    </tr>)
                                ) : (
                                    <tr>
                                        <td colspan="6">No results found</td>
                                    </tr>
                                )
                            ) : (
                                <div class="spinner-border" role="status">
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
export default SearchPage;
