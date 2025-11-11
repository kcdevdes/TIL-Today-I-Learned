import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams();

  console.log(params);
  return <h1>Diary</h1>;
};
export default Diary;
