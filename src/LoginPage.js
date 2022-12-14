import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
function LoginPage(){
    
    const [newUser, setNewUser] = useState({
        user_name: "",
        user_id: "",
        password: "",
        country: "",
        age : "",
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
    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        var bool = isValidUser(newUser)
        if(!bool){
            setNewUser({user_name: "",
            display: "",
            password: "",
            conversations: ""});
        }
    }
    const isValidUser = (newUser)=>{
        if(!isExistuser_name(newUser.user_name)){
            return false;
        }
        for(var j =0; j<userList.length;j++){
            if(newUser.password == userList[j].password && newUser.user_name == userList[j].user_name){
                activeUser.user_name = userList[j].user_name;
                activeUser.display = userList[j].display;
                activeUser.conversations = userList[j].conversations;
                console.log(activeUser.conversations);
                return true;
            }
        }
        return false;
    }
    const isExistuser_name = (uname)=>{
        for(var i=0; i<userList.length; i++) {
            if (uname==userList[i].user_name){
                return true;
            }
        }
        return false;
    }

   
    return (
        <>
        <div className="col-2"></div>
        <form
        autoComplete="off"
        onSubmit={e => handleSubmit(e, newUser)}
        className="col card mt-2"
        id="conncectCard"> 
            <div className="text-center">
                <h1 className="display-3">Login</h1>
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
                {(!isExistuser_name(newUser.user_name)) && newUser.user_name!=='' ? <div className="m-1 badge rounded-pill bg-danger">user name is not registered!</div> : null}
                <label htmlFor="floatingUser" className="fs-4">user_name</label>
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
                    {(isExistuser_name(newUser.user_name)) && !isValidUser(newUser) ? <div className="m-1 badge rounded-pill bg-danger">Password is incorrect!</div> : null}
                    <label htmlFor="floatingPassword" className="fs-4">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5 p-3" id="login">


                    <div className="text-center fs-5" id="submit">
                        <span>not Registered? <Link to='/regi' className="link" id="changeToRegister">
                            Click here</Link> to Register!</span>
                    </div>

                {isValidUser(newUser) ? <LinkToChat /> : null}

                
            </div>
        </form>
        <div className="col-2"></div>

        </>
    );
}
export default LoginPage;