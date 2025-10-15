function User({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) {    
    
    return (
        <li>
            <div>
                <img src={avatar} alt="" className="avatar" />
                <div className="text">
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                </div>
                <div className="button"><b onClick={() => onClickInvite(id)}>{isInvited ? "-" : "+" }</b></div>
            </div>
        </li>
    )
}

export default User;