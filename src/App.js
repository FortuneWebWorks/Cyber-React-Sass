import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './components/Header';
import Main from './pages/Main';
import Traits from './pages/Traits';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MintContextProvider from './contexts/autoMintContext';
import SnipeContextProvider from './contexts/snipeContext';
import BulkContextProvider from './contexts/bulkContext';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <MintContextProvider>
          <SnipeContextProvider>
            <BulkContextProvider>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/traits" element={<Traits />} />
              </Routes>
            </BulkContextProvider>
          </SnipeContextProvider>
        </MintContextProvider>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
