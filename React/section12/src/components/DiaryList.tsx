import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css';

const DiaryList = () => {
  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button text="작성하기" type="positive" />
      </div>
      <div className="list-wrapper">
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
