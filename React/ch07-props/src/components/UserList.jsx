import React from 'react';

function User({ user, onRemove, onToggle }) {
  // useEffect(() => {
  //   console.log('Component is mounted : User has been changed');
  //   console.log(user);
  //   return () => {
  //     console.log('before the value of user is changed...');
  //     console.log(user ? 'Freed' : user);
  //   };
  // }, [user]);

  const onClickRemove = () => {
    onRemove(user.id);
  };

  const onClickToggle = () => {
    onToggle(user.id);
  };

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={onClickToggle}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={onClickRemove}>Remove</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
