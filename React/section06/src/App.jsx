import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, use, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // 마운트 시 초기화 작업 수행
  useEffect(() => {
    console.log('Mounted');
  }, []);

  // 업데이트
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('Updated count:', count);
  });

  // 언마운트
  useEffect(() => {
    return () => {
      console.log('Unmounted');
    };
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
