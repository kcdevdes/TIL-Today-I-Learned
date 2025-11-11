import { useState } from 'react';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import Header from '../components/Header';

const getMonthlyPayload = (pivotDate, data) => {
  const beginningTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
    0
  ).getTime();

  const endingTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  interface DiaryItem {
    createdDate: number;
    [key: string]: unknown;
  }

  const typedData: DiaryItem[] = data as DiaryItem[];

  return typedData.filter(
    (item: DiaryItem) =>
      beginningTime <= item.createdDate && item.createdDate <= endingTime
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text="<" />}
        rightChild={<Button onClick={onIncreaseMonth} text=">" />}
      />
      <DiaryList />
    </>
  );
};
export default Home;
