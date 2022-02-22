import { Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import MainPage from './containers/MainPage/components/MainPage';
import NotFoundPage from './containers/NotFoundPage';
import TestPage from './containers/TestPage/components/TestPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
