import React from "react";

var userIsRegistered = false;

function Form() {
    return (
        <div>
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                {userIsRegistered ? null: <input type="password" placeholder="Confirm Password" />}
                <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
            </form>
        </div>
    );
};

export default Form;