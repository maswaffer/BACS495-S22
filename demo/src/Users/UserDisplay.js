
function UserDisplay(props) {
  return <div>
      <p>
        Here is the list of current users in the database<br/>
        {props.users.map(u => <li key={u.id}>{u.id} - {u.name}</li>)}
      </p>
  </div>;
}

export default UserDisplay;
