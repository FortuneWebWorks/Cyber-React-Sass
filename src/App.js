import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import './styles/app.scss';
import Header from './components/Header2';
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
              <Routes />
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
