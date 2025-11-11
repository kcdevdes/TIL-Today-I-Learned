import React, { useState , useRef } from 'react';

function InputSample() {
  const [input, setInput] = useState({
    name: '',
    nickname: '',
  });
  
  const nameInput = useRef();
  const { name, nickname } = input;

  const onChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input, // 기존 객체 복사
      [name]: value // name키를 가진 값을 value로 설정
    });
  }

  const onReset = () => {
    setInput({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name='name'
        placeholder='Name'
        onChange={onChange}
        value={name}
        ref={nameInput} />
      <input
        name='nickname'
        placeholder='Nickname'
        onChange={onChange}
        value={nickname} />
      <button onClick={onReset}>Initialize</button>
      <div>
        <b>{name} has the nickname : { nickname }</b>
      </div>
    </div>
  )
}

export default InputSample;