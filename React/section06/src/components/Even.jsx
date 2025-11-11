import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // 클린업 함수
    return () => {
      console.log('Even component unmounted');
    };
  }, []);

  return (
    <div className="Even">
      <h1>Even Component</h1>
      <p>This is the Even component.</p>
    </div>
  );
};

export default Even;
