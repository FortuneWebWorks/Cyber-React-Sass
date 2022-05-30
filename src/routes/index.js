import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Traits from '../pages/Trending';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Trending" element={<Traits />} />
    </Routes>
  );
};

export default index;
