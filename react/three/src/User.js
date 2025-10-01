import React from "react";

class User extends React.Component {

    componentWillUnmount() {
        alert("Пользователь удален");
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Name: Anna</li>
                    <li>Email: anna@mail.ru</li>
                    <li>Contact: +7 999 123-45-67</li>
                </ul>
            </div>
        )
    }
}

export default User;
