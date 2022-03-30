import { Routes, Route } from "react-router-dom";
import MainPage from './containers/MainPage';
import NotFoundPage from './containers/NotFoundPage';
import TestPage from './containers/TestPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/test" element={<TestPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
