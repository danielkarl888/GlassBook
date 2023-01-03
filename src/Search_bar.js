import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import search_data from "./ManagingUsersList/seachData";
import { useNavigate, useLocation, useHistory } from "react-router-dom";




const SearchBar = () => {
  const user_input = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const hendle_key_down_text = (event) => {
    event.preventDefault();

    if (window.location.pathname === '/SearchPage') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('searchCategory', null);
      searchParams.set('searchCountry', null);
      searchParams.set('searchText', user_input.current.value);
      let newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      window.location.reload();
    }
    else {
      navigate(`/SearchPage?searchCategory=${null}&searchCountry=${null}&searchText=${user_input.current.value}`);
    }
  }

  const hendle_key_down_country = (event) => {
    event.preventDefault()

    if (window.location.pathname === '/SearchPage') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('searchCategory', null);
      searchParams.set('searchCountry', search_data.search_contry);
      searchParams.set('searchText', null);
      let newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      window.location.reload();
    }
    else {
      navigate(`/SearchPage?searchCategory=${null}&searchCountry=${search_data.search_contry}&searchText=${null}`);
    }

  }

  const hendle_key_down_category = (event) => {
    event.preventDefault()

    if (window.location.pathname === '/SearchPage') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('searchCategory', search_data.search_category);
      searchParams.set('searchCountry', null);
      searchParams.set('searchText', null);
      let newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
      window.location.reload();
    }
    else {
      navigate(`/SearchPage?searchCategory=${search_data.search_category}&searchCountry=${null}&searchText=${null}`);
    }

  }

  const hendle_dropdown_country = (event) => {
    event.preventDefault()
    search_data.search_contry = event.target.value
  }

  const hendle_dropdown_category = (event) => {
    event.preventDefault()
    search_data.search_category = event.target.value
  }

  return (
    <ul>
      <br /><br />
      <li class="list-group-item">
        <h5>Search By Text:</h5>
        <form>
          <input type="text" placeholder="Search" ref={user_input} />
          <button onClick={hendle_key_down_text}>Go</button>
        </form>
      </li>
      <li class="list-group-item">
        <h5>10 Best By Country:</h5>
        <div>
          <select onChange={hendle_dropdown_country}>
            <option value="">Country</option>
            <option value="Israel">Israel</option>
            <option value="USA">USA</option>
            <option value="Slovakia">Slovakia</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
          </select>
          <button onClick={hendle_key_down_country}>Go</button>
        </div>
      </li>
      <li class="list-group-item">
        <h5>10 Best By Category</h5>
        <div>
          <select onChange={hendle_dropdown_category}>
            <option value="">Category</option>
            <option value="Adventure">Adventure</option>
            <option value="Classics">Classics</option>
            <option value="Crime">Crime</option>
            <option value="Fairy tales">Fairy tales</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Poetry">Poetry</option>
            <option value="Plays">Plays</option>
            <option value="Science fiction">Science fiction</option>
            <option value="War">War</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="Action">Action</option>
          </select>
          <button onClick={hendle_key_down_category}>Go</button>
        </div>
      </li>
    </ul>
  );
};

export default SearchBar;