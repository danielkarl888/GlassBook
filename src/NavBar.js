import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import activeBook from "./activeBook";
import moment from "moment";

function NavBar() {

    return (
        <nav class="navbar navbar-light bg-success navbar-expand-sm ">
            <Link to="/main" style={{ textDecoration: 'none' }}><a class="navbar-brand" href="/main">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo"></img>
                <nbsp /><nbsp /> <strong>GlassBook</strong>
            </a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">My Profile</a>
                            <Link to="/" style={{ textDecoration: 'none' }}><a class="dropdown-item" href="/">Log Out</a></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )



}
export default NavBar;
