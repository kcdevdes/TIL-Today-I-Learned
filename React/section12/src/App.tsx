import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import { createContext, useReducer, useRef } from 'react';

const mockData: DiaryEntry[] = [
  {
    id: 1,
    createdDate: new Date(),
    emotionId: 1,
    content: '첫 번째 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date(),
    emotionId: 4,
    content: '두 번째 일기 내용',
  },
];

interface DiaryEntry {
  id: number;
  createdDate?: Date;
  emotionId?: number;
  content?: string;
}

type DiaryAction = { type: string; payload: DiaryEntry };

function reducer(state: DiaryEntry[], action: DiaryAction): DiaryEntry[] {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.payload.id) ? action.payload : item
      );
    case 'DELETE':
      return state.filter(
        (item) => String(item.id) !== String(action.payload.id)
      );
    default:
      return state;
  }
}

const DiaryStateContext = createContext<DiaryEntry[]>([]);

interface DiaryDispatchContextType {
  onCreate: (createdDate: Date, content: string, emotionId: number) => void;
  onUpdate: (
    id: number,
    createdDate: Date,
    content: string,
    emotionId: number
  ) => void;
  onDelete: (id: number) => void;
}
const DiaryDispatchContext = createContext<DiaryDispatchContextType>({
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {},
});

const App = () => {
  const [payload, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate: Date, content: string, emotionId: number) => {
    dispatch({
      type: 'CREATE',
      payload: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (
    id: number,
    createdDate: Date,
    content: string,
    emotionId: number
  ) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <DiaryStateContext.Provider value={payload}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
};

export default App;
