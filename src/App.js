import './styles/app.scss';
import Header from './components/Header';
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
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
