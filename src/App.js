import './styles/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MintContextProvider from './contexts/autoMintContext';
import SnipeContextProvider from './contexts/snipeContext';
import BulkContextProvider from './contexts/bulkContext';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MintContextProvider>
        <SnipeContextProvider>
          <BulkContextProvider>
            <Main />
          </BulkContextProvider>
        </SnipeContextProvider>
      </MintContextProvider>
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
