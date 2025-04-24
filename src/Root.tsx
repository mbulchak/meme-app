import App from './App.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import {TableBlock} from './pages/Table/Table.tsx';
import {List} from './pages/List/List.tsx';

export const Root = () => {
  return (
    <BrowserRouter basename='meme-app/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='table' element={<TableBlock />} />

          <Route path='list' element={<List />} />

          <Route path='*' element={<p>Page is not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
