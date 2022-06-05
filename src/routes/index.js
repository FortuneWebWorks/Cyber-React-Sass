import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Traits from '../pages/Trending';
import Drops from '../pages/Drops';
import ExpectedPnl from '../pages/ExpectedPnl';
import ApiensOfficials from '../pages/ApiensOfficials';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/trending" element={<Traits />} />
      <Route path="/drops" element={<Drops />} />
      <Route path="/panel" element={<ExpectedPnl />} />
      <Route path="/apiens" element={<ApiensOfficials />} />
    </Routes>
  );
};

export default index;
