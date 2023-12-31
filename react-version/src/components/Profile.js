import profile_hex from './profile-hex.png'
function Profile(){
    const firstName = "Amy";
    const lastName ="Mansell";
    const avatar = profile_hex
    return (
        <aside>
            <div className="profile">
                <img className="profile__image" src={avatar} alt="mine"></img>
            </div>
            <br/>
            <div className="profile__name">
            <h2><span className="profile--bold">{firstName}</span>{lastName}</h2>
            </div>
      </aside>
    );
}
export default Profile;