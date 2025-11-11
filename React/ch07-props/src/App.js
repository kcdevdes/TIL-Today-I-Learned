import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import Hello from './components/Hello.jsx';
import Wrapper from './components/Wrapper.jsx';
import Counter from './components/Counter.jsx';
import InputSample from './components/InputSample.jsx';
import Strikethrough from './components/Strikethrough.jsx';
import UserList from './components/UserList.jsx';
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {
  console.log('Counting active users...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'kevin choi',
      email: 'kcdevdes@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'gibeom choi',
      email: 'kvicwhite@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'undefined choi',
      email: 'example@example.com',
      active: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const nextId = useRef(4);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      // Returns the array whose element containing the selecte id is removed.
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <Hello name="Kevin Choi" color="red" isBold isSpecial />
      <Strikethrough />
      <Counter />
      <Strikethrough />
      <InputSample />
      <Strikethrough />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <Strikethrough />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>Number of Active Users : {count}</div>
    </Wrapper>
  );
}

export default App;
