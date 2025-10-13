import User from "./User";
import "./Users.css";

function Users({items}){
    return(
        <>
            <div className="search">
                <input type="text" placeholder="Найти пользователя" />
            </div>
            <ul className="users-list">
                {
                    items.map(obj => (
                        <User key={obj.id} {...obj} />
                    ))
                }
            </ul>
            <button className="send-invite-btn">
                Отправить приглашение
            </button>
        </>
    )
}

export default Users;