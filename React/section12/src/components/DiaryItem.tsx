import { getEmotionImages } from '../util/emotionImage';
import Button from './Button';
import './DiaryItem.css';

const DiaryItem = () => {
  const emotionId = 1;

  return (
    <div className="diary-item">
      <div className={`img-section img-section-${emotionId}`}>
        <img src={getEmotionImages(emotionId)} />
      </div>
      <div className="info-section">
        <div className="created-date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 내용</div>
      </div>
      <div className="button-section">
        <Button text="수정하기" type="default" />
      </div>
    </div>
  );
};

export default DiaryItem;
