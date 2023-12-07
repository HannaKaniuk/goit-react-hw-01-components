export const FriendListItem =({avatar, name, isOnline, id}) =>{
    return <li key={id} className="item">
    <span className="status">{`status ${isOnline ? 'online' : 'offline'}`}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
}