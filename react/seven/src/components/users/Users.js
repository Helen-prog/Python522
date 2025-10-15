import User from "./User";
import "./Users.css";

function Users({
    items,
    searchValue,
    onChangeValue,
    invites,
    onClickInvite,
    onClickSendInvites }) {
    return (
        <>
            <div className="search">
                <input type="text"
                    placeholder="Найти пользователя"
                    value={searchValue}
                    onChange={onChangeValue}
                />
            </div>
            <ul className="users-list">
                {
                    items.filter(obj => {
                        const fullName = (obj.first_name + obj.last_name).toLowerCase();
                        return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
                    }).map(obj => (
                        <User key={obj.id} {...obj}
                            onClickInvite={onClickInvite}
                            isInvited={invites.includes(obj.id)}
                        />
                    ))
                }
            </ul>
            { invites.length > 0 && <button onClick={onClickSendInvites} className="send-invite-btn">
                Отправить приглашение
            </button>}
        </>
    )
}

export default Users;