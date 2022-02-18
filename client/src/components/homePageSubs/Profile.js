import joe from '../../images/default-joe.jpeg'
export default function Profile ({user}){
    return(
        <div className='profile-div' >
            {user.avatar !== null ?  <img className="profile-avatar" src={user.avatar} /> : <img className="profile-avatar" src={joe} /> }
            <div className="profile-usertags">
                <p className="profile-name">{user.name}</p>
                <p className="profile-username">{user.username}</p>
            </div>
            <p className='profile-dots'>...</p>
        </div>
    )
}