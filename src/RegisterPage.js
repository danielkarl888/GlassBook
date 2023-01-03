import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';
import activeUser from "./ManagingUsersList/activeUser";
function RegisterPage() {

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_id: "",
        password: "",
        country: "",
        age: "",
        comments: ""
    });
    const handleuser_nameChange = (event) => {
        setNewUser({ ...newUser, user_name: event.target.value })
        console.log(newUser.user_name);
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
        console.log(newUser.password);
    }
    const handleCountryChange = (event) => {
        setNewUser({ ...newUser, country: event.target.value })
        console.log(newUser.country);
    }
    const handleAgeChange = (event) => {
        setNewUser({ ...newUser, age: event.target.value })
        console.log(newUser.age);
    }
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    /*const handleSubmit = (event, newUser) => {
        event.preventDefault();
        validAllandRegister(newUser);
        var bool = validAllandRegister(newUser);
        setNewUser({
            user_name: "",
            user_id: "",
            password: "",
            country: "",
            age: "",
            comments: ""
        });
        console.log(bool);
        if (bool) {
            console.log("succedd!!");
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    }*/
    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        /*
        console.log("handle submit started")
        console.log(newUser)
        fetch(`http://localhost:5182/api/Users/isExistUserName?user_name=${newUser.user_name}`).then(res => {
            if (res.ok) {
                console.log("u_name is already exist")
                // when the u_name is already exist
                //return false;
            } else {
                // when the user_name is ok!
                console.log("user_name is ok")
                //               if (validPassword(newUser.password) && typeof newUser.age === "number" && newUser.age > 0 && newUser.age <= 120) {
                console.log("hii")
                fetch(`http://localhost:5182/api/Users/Register?user_name=${newUser.userName}&password=${newUser.password}&country=${newUser.country}&age=${newUser.age}`).then(res => {
                    if (res.ok) {
                        //LoginFetch();
                        console.log("register starts")
                        activeUser.user_name = newUser.userName;
                        activeUser.password = newUser.password;
                        setSuccessMessage(true);
                        console.log(successMessage);
                    }
                })
                //                }
                //return true;
            }
        })

        */
        fetch('http://localhost:5182/api/Users/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_name": newUser.user_name,
                "password": newUser.password,
                "country": newUser.country,
                "age": newUser.age
            })
        }).then(res => {
            if (res.ok) {
                activeUser.user_name = newUser.user_name;
                activeUser.password = newUser.password;
                setSuccessMessage(true);
                console.log(successMessage);
            }
        })
        setNewUser({
            user_name: "",
            user_id: "",
            password: "",
            country: "",
            age: "",
            comments: ""
        });
    }

    const noExistName = (newUser) => {
        console.log(newUser)
        fetch(`http://localhost:5182/api/Users/isExistUserName?user_name=${newUser.user_name}`).then(res => {
            if (res.ok) {
                console.log("when the u_name is already exist")
                return false;
            } else {
                console.log("when the user_name is panoy")
                if (typeof newUser.age === "number")
                    console.log("correct !!!")

                // when the user_name is ok!
                return true;
            }
        })

    }
    const validPassword = (newPassword) => {
        console.log(newPassword)
        if (!(/\d/.test(newPassword) && /[a-zA-Z]/.test(newPassword))) {
            return false;
        } else {
            return true;
        }
    }
    const validAge = (age) => {
        if (age > 0 && age <= 120) {
            return true;
        } else {
            return false;
        }
    }
    const validuser_name = (uname) => {
        for (var i = 0; i < userList.length; i++) {
            if (uname === userList[i].user_name) {
                return false;
            }
        }
        return true;
    }
    const validAllandRegister = (newUser) => {
        if (validPassword(newUser.password) && validuser_name(newUser.user_name)) {
            userList.push(newUser);
            setSuccessMessage(true);
            activeUser.conversations = newUser.conversations;
            activeUser.user_name = newUser.user_name;
            activeUser.display = newUser.display;
            console.log(activeUser);
            console.log(userList[userList.length - 2])
            console.log(userList[userList.length - 1])
            return true;
        }
        return false;
    }

    return (
        <>
            <form
                autoComplete="off"
                onSubmit={e => handleSubmit(e, newUser)}
                className="col card mt-2"
                id="conncectCard">
                <div className="text-center">
                    <h1 className="display-3">Register</h1>
                </div>


                <div className="form-floating mb-3 input-padding-5">
                    <input
                        onChange={handleuser_nameChange}
                        type="text"
                        className="form-control mt-2"
                        id="floatingUser"
                        placeholder="user_name"
                        name="user_name"
                        value={newUser.user_name}>
                    </input>
                    <label htmlFor="floatingUser" className="fs-4">User Name</label>
                </div>
                <>
                    <div className="form-floating mb-3 input-padding-5">
                        <input
                            onChange={handlePasswordChange}
                            type="password"
                            className="form-control mt-2"
                            id="floatingPassword"
                            placeholder="Password"
                            name="Password"
                            value={newUser.password}>
                        </input>
                        {(!validPassword(newUser.password) && !submitted && newUser.user_name != "") ? <div className="m-1 badge rounded-pill bg-danger">please select at least 1 letter and 1 number!</div> : null}
                        <label htmlFor="floatingPassword" className="fs-4">Password</label>
                    </div>
                </>
                <div className="form-floating mb-3 input-padding-5 ">
                    <input
                        onChange={handleCountryChange}
                        type="text"
                        className="form-control mt-2"
                        id="floatingDisplay"
                        value={newUser.country}
                        placeholder="Country"></input>
                    <label htmlFor="floatingDisplay" className="fs-4">Country</label>
                </div>
                <div className="form-floating mb-3 input-padding-5 ">
                    <input
                        onChange={handleAgeChange}
                        type="text"
                        className="form-control mt-2"
                        id="floatingDisplay"
                        value={newUser.age}
                        placeholder="Age"></input>
                    {(!validAge(newUser.age) && !submitted && newUser.user_name != "") ? <div className="m-1 badge rounded-pill bg-danger">please enter a valid age!</div> : null}

                    <label htmlFor="floatingDisplay" className="fs-4">Age</label>
                </div>

                <div className="form-floating mb-3 input-padding-5 p-3" id="register">
                    <div className="col-7" id="submit">
                        <button type="submit" className="btn btn-primary btn-karl offset-6 fs-4 mb-3" id="register-btn">
                            <i className="bi bi bi-pen-fill"></i> Register</button>
                    </div>
                    <div className="col-7" id="submit">
                        {(successMessage) ? <Link to='/main'><button className="btn btn-success btn-karl offset-6 fs-4 mb-3" id="register-btn"> click here to Enter!</button></Link> : <>You must enter a valid password
                            (at least one letter and number) and a valid age</>}
                    </div>
                    <div className="row">
                        <div className='col-4'></div>
                        <div className="col fs-5" id="submit" >Already Registered? <Link to='/' className="link" id="changeToLogin">Click here</Link> to Login</div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </form>

        </>
    );
}
export default RegisterPage;